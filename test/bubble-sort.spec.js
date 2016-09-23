const chai = require('chai');
const expect = chai.expect;
const bubbleSort = require('../bubble-sort.js');

describe('bubbleSort', function() {

  it('should be a function', function() {
    //expect(bubbleSort).to.not.be.undefined;
    expect(bubbleSort).to.be.a('function');
  });

  it('returns the number of swap operations needed to sort it', function() {
    expect(bubbleSort([5, 1, 4, 2, 8]).swaps).to.equal(4);
    expect(bubbleSort([8, 5, 4, 2, 1]).swaps).to.equal(10);
  });

  it('returns the number of passes required to sort it', function() {
    expect(bubbleSort([5, 1, 4, 2, 8]).passes).to.equal(3);
    expect(bubbleSort([8, 5, 4, 2, 1]).passes).to.equal(5);
  });

});