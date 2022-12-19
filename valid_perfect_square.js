function isPerfectSquare(num){
    let left = 0;
    let right = num;
    while (left <= right){
        const mid = Math.floor((left + right) / 2);
        let tempNum = mid * mid;

        if (tempNum === num) return true;
        else if(tempNum < num) left = mid + 1;
        else right = mid -1;
    }

    return false;
}

console.log(isPerfectSquare(14));