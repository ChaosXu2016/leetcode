/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if(prices.length < 2) {
    return 0
  }
  return computeMaxProfit(prices, 0, 1, prices[0])
};

const computeMaxProfit = (prices, lastMaxProfit, currentIndex, minPrice) => {
  if(currentIndex < prices.length) {
    const maxProfit = Math.max(lastMaxProfit, prices[currentIndex] - minPrice)
    return computeMaxProfit(prices, maxProfit, currentIndex + 1, Math.min(minPrice, prices[currentIndex]))
  }
  return lastMaxProfit
}

console.log(maxProfit([1, 2]))
