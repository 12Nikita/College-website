//Q9.Check if a numeric array is sorted or not:

function isArraySorted(arr) {
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}

var sortedArray = [1, 2, 3, 4, 5];
var unsortedArray = [5, 4, 3, 2, 1];
console.log(isArraySorted(sortedArray)); // Output: true
console.log(isArraySorted(unsortedArray)); // Output: false