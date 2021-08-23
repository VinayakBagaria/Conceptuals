// possible states
const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class CPromise {
  constructor(executor) {
    // initial state
    this.state = PENDING;
    // .then handler queue
    this.queue = [];
    // call the executor immediately
    doResolve(this, executor);
  }

  then(onFulfilled, onRejected) {
    // empty executor
    const promise = new CPromise(() => {});
    handle(this, {
      promise,
      onFulfilled,
      onRejected,
    });
    return promise;
  }
}

// invoke all the handlers store for the promise
function finale(promise) {
  const length = promise.queue.length;
  for (let i = 0; i < length; i += 1) {
    handle(promise, promise.queue[i]);
  }
}

function fulfill(promise, value) {
  promise.state = FULFILLED;
  promise.value = value;
  finale(promise);
}

function reject(promise, reason) {
  promise.state = REJECTED;
  promise.value = reason;
  finale(promise);
}

function handleResolved(promise, handler) {
  const cb =
    promise.state === FULFILLED ? handler.onFulfilled : handler.onRejected;

  // execute the handler and transition according to the rules
  try {
    const value = cb(promise.value);
    fulfill(handler.promise, value);
  } catch (err) {
    reject(handler.promise, err);
  }
}

// checks the state of the current promise
// - queue for later use if PENDING
// - call the handler if not PENDING
function handle(promise, handler) {
  if (promise.state === PENDING) {
    // queue if PENDING
    promise.queue.push(handler);
  } else {
    // execute immediately
    handleResolved(promise, handler);
  }
}

// creates the fulfill/reject functions that are arguments of the executor
function doResolve(promise, executor) {
  let isCalled = false;

  function wrapFulfill(value) {
    if (isCalled) {
      return;
    }
    isCalled = true;
    fulfill(promise, value);
  }

  function wrapReject(reason) {
    if (isCalled) {
      return;
    }
    isCalled = true;
    reject(promise, reason);
  }

  try {
    executor(wrapFulfill, wrapReject);
  } catch (err) {
    wrapReject(err);
  }
}

module.exports = CPromise;
