const BinaryTree = require('./BinaryTree')

/**
 *             a
 *           /   \
 *          b     c
 *         / \   / \
 *        d   e f   g 
 */
const testTree = new BinaryTree('a')
testTree.left = new BinaryTree('b')
testTree.right = new BinaryTree('c')
testTree.left.left = new BinaryTree('d')
testTree.left.right = new BinaryTree('e')
testTree.right.left = new BinaryTree('f')
testTree.right.right = new BinaryTree('g')

// Pre-Order Traversal
function preOrderTraversalRecursion(tree) {
  console.log(tree.val)
  if(tree.left) {
    preOrderTraversalRecursion(tree.left)
  }
  if(tree.right) {
    preOrderTraversalRecursion(tree.right)
  }
}

function preOrderTraversalNoRecursion(tree) {
  const stack = [tree]
  while(stack.length) {
    const node = stack.pop()
    if(node.right) {
      stack.push(node.right)
    }
    if(node.left) {
      stack.push(node.left)
    }
    console.log(node.val)
  }
}

// In-Order Traversal
function inOrderTraversalRecursion(tree) {
  if(tree.left) {
    inOrderTraversalRecursion(tree.left)
  }
  console.log(tree.val)
  if(tree.right) {
    inOrderTraversalRecursion(tree.right)
  }
}

function inOrderTraversalNoRecursion(tree) {
  const stack = []
  let node = tree
  while(stack.length || node) {
    while(node) {
      stack.push(node)
      node = node.left
    }
    node = stack.pop()
    console.log(node.val)
    if(node.right) {
      node = node.right
    }
  }
}

// Post-Order Traversal
function postOrderTraversalRecursion(tree) {
  if(tree.left) {
    postOrderTraversalRecursion(tree.left)
  }
  if(tree.right) {
    postOrderTraversalRecursion(tree.right)
  }
  console.log(tree.val)
}

function postOrderTraversalNoRecursion(tree) {
  const stack = []
  const visitMap = new Map()
  let node = tree, vNode = null
  stack.push(node)
  while(stack.length) {
    console.log(stack.map(item => item.val))
    if(visitMap.get(node)) {
      stack.pop()
      node = stack[stack.length - 1]
      continue
    }
    console.log('node.left', node.left)
    while(node.left && !visitMap.get(node.left)) {
      stack.push(node.left)
      node = node.left
    }
    node = stack[stack.length - 1]
    // console.log('node.right', node.right)
    if(node.right && !visitMap.get(node.right)) {
      stack.push(node.right)
      node = node.right
    }
    console.log('visit', node.val)
    visitMap.set(node, true)
  }
}

// postOrderTraversalRecursion(testTree)
// console.log('=============================================')
postOrderTraversalNoRecursion(testTree)
