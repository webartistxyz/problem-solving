function binary_search(arr, target) {
    let left = 0;
    let right = arr.length;

    let mid = 0;

    while (left <= right) {
        mid = Math.ceil((left + right) / 2);

        if (arr[mid] === target){
          return mid;
        }

        if (arr[mid] < target){
          left = mid + 1;
        }else {
          right = mid -1;
        }
    }
    return -1;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 10;

console.log(binary_search(arr, target));
