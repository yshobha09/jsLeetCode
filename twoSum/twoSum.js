/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === target - nums[j]) {
                return [i, j];
            }
        }
    }

}

indices = twoSum([55, 89, 12, 1, 9, 100, 11, 311, 22, 44, 66, 0], 66)

console.log('indices are: ${indices[0]}, ${indices[1]}');