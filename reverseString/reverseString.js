/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let left = 0;
    let right = s.length-1;
    while(left < right){
        [s[left],s[right]] = [s[right],s[left]];

        left = left+1;
        right = right-1;
    }
};

const s = ['h', 'e', 'l', 'l', 'o'];

reverseString(s);
console.log(s);