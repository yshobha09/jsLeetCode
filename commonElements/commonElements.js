/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    let count1 = 0;
    let count2 = 0;

    for(let i = 0; i < nums1.length; i++){
        if(set2.has(nums1[i])){
            count1++;
        }
    }
    for(let i = 0; i < nums2.length; i++){
        if(set1.has(nums2[i])){
            count2++;
        }
    }
return[count1, count2];

};

console.log(findIntersectionValues([1,2,3,4,5,2,3], [6,4,3,3,2]));
console.log(findIntersectionValues([2,3,2], [1,2]));
console.log(findIntersectionValues([3,4,2,3], [1,5]));
