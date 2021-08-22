// possible states
const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class CPromise {
  constructor(executor) {
    // initial state
    this.state = PENDING;
    // call the executor immediately
    this.doResolve(executor);
  }

  fulfill(value) {
    this.state = FULFILLED;
    this.value = value;
  }

  reject(reason) {
    this.state = REJECTED;
    this.value = reason;
  }

  // creates the fulfill/reject functions that are arguments of the executor
  doResolve(executor) {
    const context = this;
    let isCalled = false;

    function wrapFulfill(value) {
      if (isCalled) {
        return;
      }
      isCalled = true;
      context.fulfill(value);
    }

    function wrapReject(reason) {
      if (isCalled) {
        return;
      }
      isCalled = true;
      context.reject(reason);
    }

    try {
      executor(wrapFulfill, wrapReject);
    } catch (err) {
      wrapReject(err);
    }
  }

  then(onFulfilled, onRejected) {
    const cb = this.state === FULFILLED ? onFulfilled : onRejected;
    cb(this.value);
  }
}

module.exports = CPromise;
