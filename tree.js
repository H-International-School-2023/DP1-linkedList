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

// TODO: create the inOrderPrint function
// TODO: create a recursive function that count all the leaves. 
// Try to implement the same function in an iterative way

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

postOrderPrint(root);