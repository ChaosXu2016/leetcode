/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const result = []
  getParenthesis(n, n, '', result, 0)
  return result
};

var getParenthesis = function(leftRest, rightRest, parentheses, parenthesesArr, flag) {
  if(flag < 0) {
    return
  }
  if(leftRest) {
    getParenthesis(leftRest - 1, rightRest, parentheses + '(', parenthesesArr, flag + 1)
  }
  if(rightRest) {
    getParenthesis(leftRest, rightRest - 1, parentheses + ')', parenthesesArr, flag - 1)
  }
  if(!flag && !leftRest && !rightRest) {
    parenthesesArr.push(parentheses)
  }
}

console.log(generateParenthesis(3))
