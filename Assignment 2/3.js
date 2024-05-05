//Q3.Sort a list of elements using Quick sort:


function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  var pivot = arr[Math.floor(arr.length / 2)];
  var left = [];
  var right = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] > pivot) {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

var list = [3, 1, 4, 1, 5, 9, 2, 6, 5];
console.log(quickSort(list)); // Output: [1, 1, 2, 3, 4, 5, 5, 6, 9]