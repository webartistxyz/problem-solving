let isPalindrome = function(x) {
    // let reverse = String(x).split('').reverse().join('')
    // if (x == reverse){
    //     return true;
    // }else {
    //     return false
    // }

    let str = String(x);

    let len = str.length;

    for ( let i = 0; i < Math.floor(len/2); i++ ) {
        console.log(str[i], str[len - 1 - i])
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
};

console.log(isPalindrome(12541))