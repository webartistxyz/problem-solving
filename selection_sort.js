function selection_sort(arr) {
  let i, j, index_min, temp;

  for (i = 0; i < arr.length - 1; i++) {
    index_min = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[index_min]) {
        index_min = j;
      }
    }

    if (index_min != i) {
      temp = arr[i];
      arr[i] = arr[index_min];
      arr[index_min] = temp;
    }
  }

  return arr;
}

console.log(selection_sort([3, 5, 7, 1, 6, 2, 10, 8, 4, 9]));
