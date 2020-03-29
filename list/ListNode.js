function ListNode(val) {
  this.val = val;
  this.next = null;
}

function logListNode(ln) {
  let a = [], l = { ...ln }
  while(l) {
    a.push(l.val)
    l = l.next
  }
  console.log(a)
}

exports.default = ListNode
exports.logListNode = logListNode
