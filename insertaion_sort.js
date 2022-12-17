function insertion_sort(arr) {
  let i, j, item;

  for (i = 1; i < arr.length; i++) {
    item = arr[i];
    j = i - 1;

    while (j >= 0 && arr[j] > item) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }

    arr[j + 1] = item;
  }

  return arr;
}

console.log(insertion_sort([3, 5, 7, 1, 6, 2, 10, 8, 4, 9]));
