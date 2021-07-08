const reduce = require('./reduce');

const sum = (s, v) => s + v;

describe('Error conditions', () => {
  beforeAll(() => {
    Array.prototype.customReduce = reduce;
  });

  test('Check if this exists, reduce is not called on null or undefined', () => {
    function init() {
      Array.prototype.customReduce.call(null, sum, 2);
    }
    expect(init).toThrow(TypeError);
  });
});
