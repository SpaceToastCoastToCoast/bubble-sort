function bubbleSort(array) {
  passCount = 0;
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

  return passCount;
}

module.exports = bubbleSort;