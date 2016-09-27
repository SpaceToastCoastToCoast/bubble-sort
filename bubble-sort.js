Array.prototype.bubbleSort = function(arr) {
  if(arr !== undefined) {
    this.array = arr.map(function(element){
      return element;
    });
  } else {
    this.array = this.map(function(element){
      return element;
    });
  }

  function sort(array) {
    var passCount = 0;
    var swapCount = 0;
    var sorted = false;

    var prev = -Infinity;
    function isBiggerThanPrev(elem) {
      var result = (elem >= prev);
      prev = elem;
      return result;
    }

    while(!sorted) {

      for(var i = 0; i < (array.length - 1); i++){
        if(array[i] > array[i + 1]) {
          swapCount++;
          array.splice(i, 0, array.splice((i + 1), 1)[0]);
        }
      }
      passCount++;

      prev = -Infinity;
      if(array.every(isBiggerThanPrev)) {
        passCount++;
        sorted = true;
      }

    }

    return {
      passes: passCount,
      swaps: swapCount,
      sorted: array
    };
  }

  return sort(this.array);
};

module.exports = Array.prototype.bubbleSort;