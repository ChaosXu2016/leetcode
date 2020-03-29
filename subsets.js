// 幂集。编写一种方法，返回某集合的所有子集。集合中不包含重复的元素。
// 说明：解集不能包含重复的子集。

// 1. 二进制占位法
// 1～2^nums.length -> 转为2进制，若位置为0则不取，为一则取出。
// 2^n
// 2. 回溯法
// 
const subsets = function(nums) {
  const subsets = [[]]
  for(let i = 0; i < nums.length; i++) {
    subsets.push(...subsets.map(item => {
      const t = [...item]
      t.push(nums[i])
      return t
    }))
  }
  return subsets
}

console.log(subsets([1, 2, 3]))
