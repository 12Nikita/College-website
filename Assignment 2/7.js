//Q7.Sort a list of elements using Bubble sort:

function bubbleSort(arr) {
  var n = arr.length;
  for (var i = 0; i < n - 1; i++) {
    for (var j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

var list = [3, 1, 4, 1, 5, 9, 2, 6, 5];
console.log(bubbleSort(list)); // Output: [1, 1, 2, 3, 4, 5, 5, 6, 9]