function findMissing(nums){

    //mathematical formula
    // let n = arr.length;
    // let sum1 = ((n)*(n+1))/2;
    // let sum2 = 0;
    //
    // for(let i = 0; i < n; i++){
    //     sum2 += arr[i];
    // }
    // return sum1-sum2;

    let sum = 0;

    for(let i = 0; i < nums.length; i++){
        sum += i+1;
        sum -= nums[i];
    }
    return sum;
}
let arr = [0,1];
console.log(findMissing(arr));