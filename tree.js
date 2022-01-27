const Nodes = require('./nodes');
const TreeNode = Nodes.TreeNode;

function preOrderPrint(node) {
  if (node !== null) {
    console.log(node.key);
    preOrderPrint(node.left);
    preOrderPrint(node.right);
  }
};

function postOrderPrint(node) {
  if (node !== null) {
    postOrderPrint(node.left);
    postOrderPrint(node.right);
    console.log(node.key);
  }
};

function inOrderPrint(node) {
  if (node !== null) {
    inOrderPrint(node.left);
    console.log(node.key);
    inOrderPrint(node.right);
  }
};

function countLeaves(node) {
  if (node === null) {
    return 0;
  }
  else {
    if (node.left === null && node.right === null) {
      return 1;
    }
    return countLeaves(node.left) + countLeaves(node.right);
  }
}

const root = new TreeNode('Andrea',
    new TreeNode('Alessandro', 
      new TreeNode('Tigne', null, null),
      null,
    ),
    new TreeNode('Alessio', 
      new TreeNode('Giammarco', null, null),
      new TreeNode('Ebube', null, new TreeNode('Leonardo', null, null))
    ),
  );

  console.log(countLeaves(root));