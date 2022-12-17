function binary_serach() {
  let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let x = 7;

  let mid = 0;

  let left = 0;
  let right = 9;

  while (left <= right) {
    mid = Math.ceil((left + right) / 2);

    if (a[mid] == x) {
      return mid;
    }

    if (a[mid] < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

console.log(binary_serach());
