class SingleNode {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
};

class TreeNode {
  constructor(key, left, right) {
    this.key = key;
    this.left = left;
    this.right = right;
  }
}

const exportObject = {
  SingleNode: SingleNode,
  TreeNode: TreeNode,
};

module.exports = exportObject;