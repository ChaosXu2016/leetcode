/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target, left, right) {
  const l = typeof left === 'number' ? left : 0,
  r = typeof right === 'number' ? right : nums.length
  if(l <= r) {
    const middle = Math.floor((l + r) / 2)
    if (nums[middle] === target) {
      return middle
    } else if (nums[middle] > target) {
      return search(nums, target, l, middle - 1)
    } else {
      return search(nums, target, middle + 1, right)
    }
  } else {
    return -1
  }
};

console.log(search([1, 3, 5, 7, 9], 11))
