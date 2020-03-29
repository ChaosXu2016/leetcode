const ListNode = require('./ListNode').default
const logListNode = require('./ListNode').logListNode
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  const sortListNode = new ListNode(-1)
  let pSortListNode = sortListNode, p1 = l1, p2 = l2
  while(p1 && p2) {
    if(p1.val < p2.val) {
      pSortListNode.next = new ListNode(p1.val)
      p1 = p1.next
    } else {
      pSortListNode.next = new ListNode(p2.val)
      p2 = p2.next
    }
    pSortListNode = pSortListNode.next
  }
  pSortListNode.next = p1 || p2
  return sortListNode.next
}
var mergeKLists = function(lists) {
  if(lists.length < 2) {
    return lists[0] || null
  }
  return lists.reduce((l1, l2) => mergeTwoLists(l1, l2))
};

/**
 * [
  1->4->5,
  1->3->4,
  2->6
]
 */
const d1 = new ListNode(1)
d1.next = new ListNode(4)
d1.next.next = new ListNode(5)
const d2 = new ListNode(1)
d2.next = new ListNode(3)
d2.next.next = new ListNode(4)
const d3 = new ListNode(2)
d3.next = new ListNode(6)
mergeKLists([d1, d2, d3])
// logListNode()
