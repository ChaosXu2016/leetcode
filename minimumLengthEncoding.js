/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
  if(!words.length) {
    return ''
  }
  const sortWords = words.sort((a, b) => b.length - a.length)
  const encodingWords = [sortWords[0]]
  for(let i = 1; i < sortWords.length; i++) {
    const idx = encodingWords.findIndex(item => sortWords[i] === item.slice(item.length - sortWords[i].length))
    if(idx === -1) {
      encodingWords.push(sortWords[i])
    }
  }
  return (encodingWords.join('#') + '#').length
};
