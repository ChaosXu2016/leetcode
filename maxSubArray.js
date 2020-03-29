/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function(nums) {
//   let maxSum = nums[0]
//   for(let i = 1; i < nums.length; i++) {
//     if(nums[i - 1] > 0) {
//       nums[i] += nums[i - 1]
//     }
//     maxSum = Math.max(nums[i], maxSum)
//   }
//   return maxSum
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  return getMaxSubArray(nums, 1, nums[0])
};

function getMaxSubArray(nums, currentIndex, maxSum) {
  if(currentIndex < nums.length) {
    nums[currentIndex] = nums[currentIndex] + Math.max(nums[currentIndex - 1], 0)
    return getMaxSubArray(nums, currentIndex + 1, Math.max(maxSum, nums[currentIndex]))
  }
  return maxSum
};

console.log(maxSubArray([-2, -1]))
