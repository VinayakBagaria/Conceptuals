const CPromise = require('./promise');

const value = 'success';
const reason = 'failure';

it('receives an executor function when constructed which is called immediately', () => {
  const executor = jest.fn();
  const promise = new CPromise(executor);
  // mock function should be called immediately
  expect(executor.mock.calls.length).toBe(1);
  // arguments should be functions
  expect(typeof executor.mock.calls[0][0]).toBe('function');
  expect(typeof executor.mock.calls[0][1]).toBe('function');
});

it('is in a PENDING state', () => {
  const promise = new CPromise(function executor(resolve, reject) {});
  expect(promise.state).toBe('PENDING');
});

it('transitions to the FULFIILLED state with a value', () => {
  const promise = new CPromise((resolve, reject) => {
    resolve(value);
  });
  expect(promise.state).toBe('FULFILLED');
});

it('transitions to the REJECTED state with a reason', () => {
  const promise = new CPromise((resolve, reject) => {
    reject(reason);
  });
  expect(promise.state).toBe('REJECTED');
});

it('should have a .then method', () => {
  const promise = new CPromise(() => {});
  expect(typeof promise.then).toBe('function');
});

it('should call the onFulfilled method when a promise is in a FULFIllED state', () => {
  const onFulfilled = jest.fn();
  const promise = new CPromise((resolve, reject) => {
    resolve(value);
  }).then(onFulfilled);
  expect(onFulfilled.mock.calls.length).toBe(1);
  expect(onFulfilled.mock.calls[0][0]).toBe(value);
});

it('should call the onRejected method when a promise is in a REJECTED state', () => {
  const onRejected = jest.fn();
  const promise = new CPromise((resolve, reject) => {
    reject(reason);
  }).then(null, onRejected);
  expect(onRejected.mock.calls.length).toBe(1);
  expect(onRejected.mock.calls[0][0]).toBe(reason);
});

it('when a promise is fulfilled, it should not be rejected with another value', () => {
  const onFulfilled = jest.fn();
  const onRejected = jest.fn();
  const promise = new CPromise((resolve, reject) => {
    resolve(value);
    reject(reason);
  });
  promise.then(onFulfilled, onRejected);
  expect(onFulfilled.mock.calls.length).toBe(1);
  expect(onFulfilled.mock.calls[0][0]).toBe(value);
  expect(onRejected.mock.calls.length).toBe(0);
  expect(promise.state).toBe('FULFILLED');
});

it('when a promise is rejected, it should not be fulfilled with another value', () => {
  const onFulfilled = jest.fn();
  const onRejected = jest.fn();
  const promise = new CPromise((resolve, reject) => {
    reject(reason);
    resolve(value);
  });
  promise.then(onFulfilled, onRejected);
  expect(onRejected.mock.calls.length).toBe(1);
  expect(onRejected.mock.calls[0][0]).toBe(reason);
  expect(onFulfilled.mock.calls.length).toBe(0);
  expect(promise.state).toBe('REJECTED');
});

it('when the executor itself fails, the promise should transition to REJECTED state with a reason', () => {
  const executorReason = new Error(reason);
  const onRejected = jest.fn();
  const promise = new CPromise((resolve, reject) => {
    throw executorReason;
  });
  promise.then(null, onRejected);
  expect(onRejected.mock.calls.length).toBe(1);
  expect(onRejected.mock.calls[0][0]).toBe(executorReason);
  expect(promise.state === 'REJECTED');
});

it('should queue callbacks when the promise is not fulfilled immediately', (done) => {
  const promise = new CPromise((resolve, reject) => {
    setTimeout(resolve, 1, value);
  });
  const onFulfilled = jest.fn();
  promise.then(onFulfilled);
  // resolve will happen after the 1ms timeout expires
  expect(onFulfilled.mock.calls.length).toBe(0);

  setTimeout(() => {
    // called once
    expect(onFulfilled.mock.calls.length).toBe(1);
    expect(onFulfilled.mock.calls[0][0]).toBe(value);
    promise.then(onFulfilled);
  }, 5);

  setTimeout(() => {
    // called twice because of the first one
    expect(onFulfilled.mock.calls.length).toBe(2);
    expect(onFulfilled.mock.calls[1][0]).toBe(value);
    done();
  }, 10);
});

it('should queue callbacks when the promise is not rejected immediately', (done) => {
  const promise = new CPromise((resolve, reject) => {
    setTimeout(reject, 1, value);
  });
  const onRejected = jest.fn();
  promise.then(null, onRejected);
  // reject will happen after the 1ms timeout expires
  expect(onRejected.mock.calls.length).toBe(0);

  setTimeout(() => {
    // called once
    expect(onRejected.mock.calls.length).toBe(1);
    expect(onRejected.mock.calls[0][0]).toBe(value);
    promise.then(null, onRejected);
  }, 5);

  setTimeout(() => {
    // called twice because of the first one
    expect(onRejected.mock.calls.length).toBe(2);
    expect(onRejected.mock.calls[1][0]).toBe(value);
    done();
  }, 10);
});
