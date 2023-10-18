function isPowerOfTwo(n) {
    if( n < 1 ) {
        return false;
    }

    while(n > 1) {
        if(n % 2 !== 0) {
            return false;
        }
        n = n/2;
    }
    return true;
}

console.log(isPowerOfTwo(25));
// console.log(isPowerOfTwo(5));
// console.log(isPowerOfTwo(10));
// console.log(isPowerOfTwo(15));
// console.log(isPowerOfTwo(4));