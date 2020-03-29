/**
 * @param {string[]} strs
 * @return {string}
 */
var getLongestCommonPrefixByTwoString = function(string1, string2) {
  for(let i = 0; ;i++) {
    if(!string1[i] || !string2[i] || string1[i] !== string2[i]) {
      return string1.slice(0, i)
    }
  }
}
// var longestCommonPrefix = function(strs) {
//   if(strs.length < 2) {
//     return strs[0] || ''
//   }
//   return strs.reduce((str1, str2) => getLongestCommonPrefixByTwoString(str1, str2))
// };

var longestCommonPrefix = function(strs) {
  if(strs.length < 2) {
    return strs[0] || ''
  }
  for(let i = 0; ;i++) {
    for(let j = 1; j < strs.length ;j++) {
      if(
        !strs[j-1] ||
        !strs[j] ||
        !strs[j-1][i] ||
        !strs[j][i] ||
        strs[j-1][i] !== strs[j][i]
      ) {
        return strs[0].slice(0, i)
      }
    }
  }
}

console.log(longestCommonPrefix(["flower","flow","flight"]))
