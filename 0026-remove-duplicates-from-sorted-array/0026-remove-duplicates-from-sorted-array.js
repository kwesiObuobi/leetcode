/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let index = 0;
    let s = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (s.has(nums[i])) {
            continue;
        } else {
            s.add(nums[i]);
            nums[index] = nums[i]
            index++;
        }
    }
    
    return index;
};