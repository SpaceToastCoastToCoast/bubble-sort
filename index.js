function bubSort(arr) {
  this.states = [];
  this.array = arr.map(function(element){
    return element;
  });

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
          states.push({
            passes: passCount,
            swaps: swapCount,
            sorted: array.map(function(element){
                      return element;
                    })
          });
        }
      }
      passCount++;

      prev = -Infinity;
      if(array.every(isBiggerThanPrev)) {
        passCount++;
        sorted = true;
      }
      states.push({
        passes: passCount,
        swaps: swapCount,
        sorted: array.map(function(element){
                  return element;
                })
      });
    }

    return states;
  }

  return sort(this.array);
}

//generate a new array on page load
var exampleArray = new Array(10).fill(0);

  exampleArray = exampleArray.map(function(element) {
    return element + Math.floor((Math.random() * 10) + 1);
  });

var snapshots = bubSort(exampleArray);
console.log(snapshots);
var snapID = 0;
var arrayDiv = document.getElementById('array');
var snapInfoDiv = document.getElementById('snapInfo');
var resetButton = document.getElementById('resetButton');

function renderSnapshot() {
  if(snapID >= snapshots.length) {
    clearInterval(renderInterval);
    return;
  }
  arrayDiv.innerHTML = "";
  for(var s in snapshots[snapID].sorted) {
    var currNum = snapshots[snapID].sorted[s];
    var arrayElementDiv = document.createElement('div');
    arrayElementDiv.innerHTML = currNum;
    arrayElementDiv.className = "numBar";
    arrayElementDiv.style.color = '#44ffcc';
    arrayElementDiv.style.height = '32px';
    arrayElementDiv.style.width = (currNum * 8) + 'px';
    arrayElementDiv.style.backgroundColor = 'rgb(' + ((currNum + 2) * 16) + ', ' + 0 + ', ' + ((currNum + 2) * 8) + ')';
    arrayDiv.appendChild(arrayElementDiv);
  }
  snapInfoDiv.innerHTML = 'Swaps: ' + snapshots[snapID].swaps +'<br />Passes: ' + snapshots[snapID].passes;
  snapID++;
}

console.log('works');

var renderInterval = setInterval(renderSnapshot, 1000);

resetButton.addEventListener('click', function(){
  arrayDiv.innerHTML = "";
  snapID = 0;
  exampleArray = new Array(10).fill(0);

  exampleArray = exampleArray.map(function(element) {
    return element + Math.floor((Math.random() * 10) + 1);
  });

  clearInterval(renderInterval);
  snapshots = bubSort(exampleArray);
  renderInterval = setInterval(renderSnapshot, 1000);
});