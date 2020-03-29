/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const l1Arr = l1.split('') , l2Arr = l2.split(''), res = []
  let a = 0
  while(l1Arr.length || l2Arr.length) {
    const n1 = +(l1Arr.pop() || 0), n2 = +(l2Arr.pop() || 0)
    res.unshift((n1 + n2 + a) % 10)
    a = Math.floor((n1 + n2 + a) / 10)
  }
  if(a) {
    res.unshift(a)
  }
  return res.join('')
};
