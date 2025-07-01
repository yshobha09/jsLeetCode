/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let set = new Set();
    let arr = [];
    for(let num of nums){
        if(set.has(num)){
            arr.push(num);
        } else {
            set.add(num);
        }
    }
    return arr;
};

console.log(findDuplicates([4,3,2,7,8,2,3,1]));
console.log(findDuplicates([1,1,2]));
console.log(findDuplicates([1]));
