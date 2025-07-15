/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    const reversed = x.toString().split('').reverse().join('');
    return x.toString() === reversed;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));