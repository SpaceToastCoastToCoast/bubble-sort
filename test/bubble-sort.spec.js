const chai = require('chai');
const expect = chai.expect;
const bubbleSort = require('../bubble-sort.js');

describe('bubbleSort', function() {

  it('should be a function', function() {
    expect(bubbleSort).to.not.be.undefined;
    expect(bubbleSort).to.be.a('function');
  });
  it('that sorts an array and returns the number of passes required to sort it', function() {
    expect(bubbleSort([5, 1, 4, 2, 8])).to.equal(3);
  });

});