const BinaryTree = require('./BinaryTree')
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
  if(!root) {
    return 0
  }
  if(root.val > L && root.val < R) {
    return rangeSumBST(root.left, L, R) + root.val + rangeSumBST(root.right, L, R)
  } else if( root.val === L && root.right ) {
    return root.val + rangeSumBST(root.right, L, R)
  } else if( root.val < L && root.right ) {
    return rangeSumBST(root.right, L, R)
  } else if( root.val === R && root.left ) {
    return rangeSumBST(root.left, L, R) + root.val
  } else if( root.val > R && root.left ) {
    return rangeSumBST(root.left, L, R)
  } else {
    return root.val
  }
};

const testTree = new BinaryTree(10)
testTree.left = new BinaryTree(5)
testTree.right = new BinaryTree(15)
testTree.left.left = new BinaryTree(3)
testTree.left.right = new BinaryTree(7)
testTree.right.left = new BinaryTree(13)
testTree.right.right = new BinaryTree(18)
testTree.left.left.left = new BinaryTree(1)
testTree.left.left.left.left = new BinaryTree(null)
testTree.left.right.left = new BinaryTree(6)

const sum = rangeSumBST(testTree, 6, 10)
