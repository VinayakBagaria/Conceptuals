const reduce = require('./reduce');

const sum = (s, v) => s + v;

describe('Error Conditions', () => {
  beforeAll(() => {
    Array.prototype.customReduce = reduce;
  });

  // test('Check if this exists, reduce is not called on null or undefined', () => {
  //   function init() {
  //     Array.prototype.customReduce.call(null, sum, 2);
  //   }
  //   expect(init).toThrow(TypeError);
  // });

  test('Check if callback is a function', () => {
    expect(() => [].customReduce()).toThrow(TypeError);
  });

  test('Reduce on empty array with no initialValue', () => {
    expect(() => [].customReduce(sum)).toThrow(TypeError);
  });
});

describe('Reduce Functionality', () => {
  beforeAll(() => {
    Array.prototype.customReduce = reduce;
  });

  test('Invoked on empty array with initialValue, returns initialValue', () => {
    const initialValue = 5;
    expect([].customReduce(sum, initialValue)).toBe(initialValue);
  });

  test('Invoked with initial Value', () => {
    expect([1, 2, 3].customReduce(sum, 1)).toEqual(7);
  });

  test('Invoked without initial Value', () => {
    expect([1, 2, 3].customReduce(sum)).toEqual(6);
  });

  test('Custom Reduce, with Promises', () => {
    function first() {
      return Promise.resolve(1);
    }

    function second(v) {
      return Promise.resolve(v + 2);
    }

    function third(v) {
      return Promise.resolve(v + 3);
    }

    function fourth(v) {
      return Promise.resolve(v + 4);
    }

    const promises = [first, second, third, fourth];
    const answer = promises.customReduce((acc, current) => {
      return acc.then(current);
    }, Promise.resolve());
    expect(answer).resolves.toEqual(10);
  });
});
