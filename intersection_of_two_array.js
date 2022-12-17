function binarySearch(arr, target) {
    let mid = 0;

    let left = 0;
    let right = arr.length;

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

let intersection = function (nums1, nums2) {
    let intersection = [];
    nums2.sort((a,b) => a-b);

    for (let i = 0; i < nums1.length; i++) {
        if (binarySearch(nums2, nums1[i]) !== -1) {
            if (intersection.indexOf(nums1[i]) === -1) {
                intersection.push(nums1[i])
            }
        }
    }

    return intersection;
};

nums1 = [61,24,20,58,95,53,17,32,45,85,70,20,83,62,35,89,5,95,12,86,58,77,30,64,46,13,5,92,67,40,20,38,31,18,89,85,7,30,67,34,62,35,47,98,3,41,53,26,66,40,54,44,57,46,70,60,4,63,82,42,65,59,17,98,29,72,1,96,82,66,98,6,92,31,43,81,88,60,10,55,66,82,0,79,11,81];
nums2 = [5,25,4,39,57,49,93,79,7,8,49,89,2,7,73,88,45,15,34,92,84,38,85,34,16,6,99,0,2,36,68,52,73,50,77,44,61,48];

console.log(intersection(nums1, nums2))