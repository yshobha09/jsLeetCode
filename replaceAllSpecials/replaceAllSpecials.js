/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function (s) {
    let arr = s.split('');
    let letters = ['a', 'b', 'c'];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '?') {
            for (let l of letters) {
                if ((i === 0 || arr[i - 1] !== l) && (i === arr.length - 1 || arr[i + 1] !== l)) {
                    arr[i] = l;
                    break;
                }
            }
        }
    }
    return arr.join('');
};

console.log(modifyString("?zs"));
console.log(modifyString("ubv?w"));
console.log(modifyString("?a?ab??z?"));
console.log(modifyString("??b?c?d?e"));
console.log(modifyString("a??b??c?d"));

