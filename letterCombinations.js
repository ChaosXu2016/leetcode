/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const dict = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  if(!digits.length) {
    return []
  }
  let strArr = ['']
  for (let i = 0; i < digits.length; i++) {
    const charArr = dict[digits[i]].split('')
    const currentLetters = []
    strArr.forEach(item => {
      currentLetters.push(...charArr.map(c => item + c))
    })
    strArr = currentLetters
  }
  return strArr
};

const letters = letterCombinations('23')

console.log(letters)
