const input = "23"
const dict = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']

const dfs = (digitsArr, arr, level, result, stack) => {
  for(let j = 0; j < arr.length; j++) {
    stack[level] = arr[j]
    if(digitsArr[level + 1]) {
      dfs(digitsArr, digitsArr[level + 1], level + 1, result, stack)
    } else {
      result.push(stack.join(''))
    }
  }
  level--
}
const fnc = (digits) => {
  const digitsArr = digits.split('').map(item => dict[item].split(''))
  let level = 0
  const stack = []
  const result = []
  dfs(digitsArr, digitsArr[level], level, result, stack)
  return result
}

console.log(fnc(input))
