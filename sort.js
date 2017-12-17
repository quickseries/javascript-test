/*
Sorting an array of numbers with array.prototype.sort uses a comparison function
which causes performance to decrease rapidly as the number of items in the array
increases (O(nlogn))
Here I have implemented something like a Binary search, hoping to improve performance
with large arrays to O(logn)

I'm not too sure about my implementation (I don't build binary searches very often!) but 
it does look more performant than the array.sort() method. However, most of my performance
improvement is not so much in the sort as in the part of the code that ignores anything
that would need to be sorted to the right of 'n'.

I also tried to do a merge sort, but somehow ended up with much worst performance than 
array.sort().
*/


var returnNthElement = function(array, n) {
  var resultArray = [];

  var getIndex = function(array, item) {
    var tempIndex = 0;
    var recurse = function(in_array, item) {
      if (in_array.length === 1) {
        if (item < in_array[0]) {
          return tempIndex;
        } else {
          return tempIndex + 1;
        }
      }
      var middle = Math.floor(array.length / 2);
      var middlePoint = in_array[middle];
      if (item < middlePoint) {
        return recurse(in_array.slice(0, middle), item);
      } else if (item > middlePoint) {
        if (middle < n) {
          tempIndex += middle;
          return recurse(in_array.slice(middle), item);
        }
        else {
          return undefined; // if item would be to the right of n, ignore
        }
      } else {
        return tempIndex + middle;
      }
    };
    return recurse(resultArray, item);
  };

  for (var i = 0; i < array.length; i++) {
    var index = getIndex(array, array[i]);
    if (index !== undefined) {
      resultArray.splice(index, 0, array[i]);
    }
  }
  return resultArray[n-1];
};

var standardSort = function(array, n) {
  return array.sort(function(a,b) {
    return a - b;
  })[n-1];
};

// run a npm install before commenting out
// var random = require('random-array');
// var list = random(0,50).oned(100000);
var list = [4,2,4,1,7,8,6,2,4,7,9,3,3,1,8,4,2,3,9,0,7,1,2,6,3,8,2,3,6,8,9,10,11,5,15,
12,4,0,1,8,7,2,4,0,7,12,17,1,5,2,7,9,3,10,3,2,1,2,4,7,8,2,0,12,17,4,7,3,13,2,5,8,5,5,
9,3,6,8,12,2,7,15,1,7];


console.time('sort');
standardSort(list, 18);
console.timeEnd('sort');

console.time('mine');
returnNthElement(list, 18);
console.timeEnd('mine');