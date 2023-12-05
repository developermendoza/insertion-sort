function insertionSort(arr) {
  var n = arr.length;

  for (var i = 1; i < n; i++) {
    var currentElement = arr[i];
    var j = i - 1;
    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = currentElement;
  }
}

var arrayToSort = [64, 34, 25, 12, 22, 11, 90];
insertionSort(arrayToSort);

console.log("Sorted array: ", arrayToSort);
