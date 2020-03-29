const BinaryTree = require('./BinaryTree')

/**
 *             1
 *           /   \
 *          2     3
 *         / \   / \
 *        4   5 6   7 
 */
const testTree = new BinaryTree(1)
testTree.left = new BinaryTree(2)
testTree.right = new BinaryTree(3)
testTree.left.left = new BinaryTree(4)
testTree.left.right = new BinaryTree(5)
testTree.right.left = new BinaryTree(6)
testTree.right.right = new BinaryTree(7)

const sumBT = (tree) => {
  if(tree.left || tree.right) {
    return tree.val + sumBT(tree.left) + sumBT(tree.right)
  } else {
    return tree.val
  }
}

const sum = sumBT(testTree)

console.log(sum)
