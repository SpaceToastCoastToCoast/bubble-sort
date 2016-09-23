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
    expect(bubbleSort([1, 4, 2, 5, 8]).swaps).to.equal(1);
  });

  it('returns the number of passes required to sort it', function() {
    expect(bubbleSort([5, 1, 4, 2, 8]).passes).to.equal(3);
    expect(bubbleSort([8, 5, 4, 2, 1]).passes).to.equal(5);
  });

  it('should work for very large arrays', function() {

    var arr = [ 64,82,61,65,70,87,56,36,45,12,26,81,76,91,5,4,37,40,22,16,
                91,93,93,70,21,80,64,89,60,97,22,24,68,100,94,68,26,65,19,
                45,88,70,71,30,15,48,80,78,54,25,34,24,19,24,62,3,68,47,77,
                87,26,2,23,96 ];

    expect(bubbleSort(arr).passes).to.equal(62);
    expect(bubbleSort(arr).swaps).to.equal(1084);
  });

});

describe('bubbleSort as extension of array prototype', function() {
  it('should be able to be called from any array', function() {
    expect([5, 1, 4, 2, 8].bubbleSort()).to.be.an('object');
  });
  it('should return the number of sorts and passes', function() {
    expect([5, 1, 4, 2, 8].bubbleSort().passes).to.equal(3);
    expect([5, 1, 4, 2, 8].bubbleSort().swaps).to.equal(4);
  });
  it('should sort the array it was called on', function() {
    expect([5, 1, 4, 2, 8].bubbleSort().sorted).to.deep.equal([1, 2, 4, 5, 8]);
  });
});