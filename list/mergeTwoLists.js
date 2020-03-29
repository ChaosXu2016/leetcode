const ListNode = require('./ListNode').default
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
var mergeTwoLists = function(l1, l2) {
  let result = new ListNode(-1)
  let p1 = l1, p2 = l2, p3 = result
  while(p1 && p2) {
    if(p1.val < p2.val) {
      p3.next = new ListNode(p1.val)
      p1 = p1.next
    } else {
      p3.next = new ListNode(p2.val)
      p2 = p2.next
    }
    p3 = p3.next
  }
  p3.next = p1 || p2
  return result.next
};

const data1 = new ListNode(1)
data1.next = new ListNode(2)
data1.next.next = new ListNode(4)

const data2 = new ListNode(1)
data2.next = new ListNode(3)
data2.next.next = new ListNode(4)

mergeTwoLists(data1, data2)
