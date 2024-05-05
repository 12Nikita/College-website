/* Q2.Find the first index of a given element in an array using linear search: */

function linearSearch(arr, element) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return i;
    }
  }
  return -1; // Element not found
}

var array = [1, 2, 3, 4, 5];
var element = 3;
console.log(linearSearch(array, element)); // Output: 2
