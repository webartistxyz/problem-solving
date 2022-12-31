/**
 * @param {number[]} arr
 * @return {boolean}
 */

function binary_search(arr, target) {
    let left = 0;
    let right = arr.length;

    let mid = 0;

    while (left <= right) {
        mid = Math.ceil((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
let checkIfExist = function(arr) {
    arr.sort((a,b) => a-b)

    for(let i = 0; i < arr.length; i++) {
        let searchVal = binary_search(arr, (arr[i] * 2));
        console.log(searchVal);
        if(searchVal >= 0 && searchVal != i){
            return true;
        }
    }
    return false;
};

let arr = [10,2,5,3];

console.log(checkIfExist(arr));