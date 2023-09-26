/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (target < nums[0]) return 0;
    if (target > nums[nums.length - 1]) return nums.length;
    
    let start = 0;
    let end = nums.length - 1;
    let mid = 0;
    
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[mid] < target) {
            start = mid + 1;
            if (nums[start] > target) return start;
        } else {
            end = mid - 1;
            if (nums[end] < target) return mid;
        }
    }
};

/**
start = 0
end = len - 1
mid = (start + end) / 2
**/