/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let preMax = 0, currentMax = 0
  for(let i = 0; i < nums.length; i++) {
    const temp = Math.max(preMax + nums[i], currentMax)
    preMax = currentMax
    currentMax = temp
  }
  return currentMax
};

console.log(rob([1, 2, 3, 1]))
