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
// only unique
// let intersection = function (nums1, nums2) {
//     let intersection = [];
//     nums2.sort((a,b) => a-b);
//
//     for (let i = 0; i < nums1.length; i++) {
//         if (binarySearch(nums2, nums1[i]) !== -1) {
//             if (intersection.indexOf(nums1[i]) === -1) {
//                 intersection.push(nums1[i])
//             }
//         }
//     }
//
//     return intersection;
// };

// as many as value

let intersection = function (nums1, nums2) {
    let intersection = [];
    nums2.sort((a,b) => a-b);

    for (let i = 0; i < nums1.length; i++) {
        let index = binarySearch(nums2, nums1[i]);
        if (index !== -1) {
            intersection.push(nums1[i])
            nums2.splice(index, 1)
        }
    }

    return intersection;
};

nums1 = [1,2,2,1];
nums2 = [2];

console.log(intersection(nums1, nums2))