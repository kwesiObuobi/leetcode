# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}

# [2,7,11,15]
def two_sum(nums, target)
    num_indices = {}
    nums.each_with_index do |num, index|
        complement = target - num
        if num_indices.include?(complement)
            return [index, num_indices[complement]]
        end
        num_indices[num] = index
    end
    return nil
end
