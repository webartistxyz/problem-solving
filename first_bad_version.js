function binary_search(obj) {
    let left = 0;
    let right = Object.keys(obj).length;


    while(left < right) {
        const mid = Math.floor((left + right) / 2)
        if(obj[mid]) {
            right = mid
        } else {
            left = mid + 1
        }
    }
    return right
}

let obj = {1: false, 2: false, 3: false, 4: true, 5: true, 6: true, 7: true, 8: true, 9: true, 10: true};

console.log(binary_search(obj));