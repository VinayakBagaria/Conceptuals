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
    this.reason = reason;
  }

  // creates the fulfill/reject functions that are arguments of the executor
  doResolve(executor) {
    const context = this;
    function wrapFulfill(value) {
      context.fulfill(value);
    }
    function wrapReject(reason) {
      context.reject(reason);
    }

    executor(wrapFulfill, wrapReject);
  }
}

module.exports = CPromise;
