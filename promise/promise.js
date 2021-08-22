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
    this.doResolve(executor);
  }

  // checks the state of the current promise
  // - queue for later use if PENDING
  // - call the handler if not PENDING
  handle(handler) {
    if (this.state === PENDING) {
      // queue if pending
      this.queue.push(handler);
    } else {
      // execute immediately
      const cb =
        this.state === FULFILLED ? handler.onFulfilled : handler.onRejected;
      cb(this.value);
    }
  }

  then(onFulfilled, onRejected) {
    this.handle({
      onFulfilled,
      onRejected,
    });
  }

  // invoke all the handlers store for the promise
  finale() {
    for (const handler of this.queue) {
      this.handle(handler);
    }
  }

  fulfill(value) {
    this.state = FULFILLED;
    this.value = value;
    this.finale();
  }

  reject(reason) {
    this.state = REJECTED;
    this.value = reason;
    this.finale();
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
}

module.exports = CPromise;
