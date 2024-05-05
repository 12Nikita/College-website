//Q6.Sort a list of elements using Insertion sort:

function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var current = arr[i];
    var j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

var list = [3, 1, 4, 1, 5, 9, 2, 6, 5];
console.log(insertionSort(list)); // Output: [1, 1, 2, 3, 4, 5, 5, 6, 9]