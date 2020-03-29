/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function(bookings, n) {
  const books = new Array(n).fill(0)
  bookings.forEach(item => {
    let [ start, end, num ] = item
    while(start <= end) {
      books[start - 1] += num
      start++
    }
  })
  return books
};

/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings2 = function(bookings, n) {
  const count = new Array(n).fill(0)
  bookings.forEach(item => {
    let [ start, end, num ] = item
    count[start - 1] = num + count[start - 1]
    if(end < n) {
      count[end] = - num - count[end]
    }
  })
  for(let i = 1; i < n; i++) {
    count[i] = (count[i - 1]) + count[i]
  }
  return count
};

const books = corpFlightBookings([[3,3,5],[1,3,20],[1,2,15]], 3)
const books2 = corpFlightBookings2([[3,3,5],[1,3,20],[1,2,15]], 3)

console.log(books)
console.log(books2)
