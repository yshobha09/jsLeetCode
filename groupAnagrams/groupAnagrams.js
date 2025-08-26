/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();
    for(let s of strs){
        let key = s.split('').sort().join('');
        if(map.has(key)){
            map.get(key).push(s);
        } else {
            map.set(key, [s]);
        }

    }
    return Array.from(map.values());
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
console.log(groupAnagrams(["a"]));
console.log(groupAnagrams([""]));