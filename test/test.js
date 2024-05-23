import assert from 'assert';
import asyncFunction from '../src/asyncFunction';
import chai from 'chai';
const expect = chai.expect;

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      expect([1, 2, 3].indexOf(4)).to.equal(-1);
    });
  });
});

describe('asyncFunction', function() {
  it('should return result after 1 second', async function() {
    const result = await asyncFunction();
    assert.strictEqual(result, 'result');
  });
});


describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.strictEqual([1, 2, 3].indexOf(4), -1);
    });
  });
});
