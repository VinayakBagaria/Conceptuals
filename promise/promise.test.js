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
