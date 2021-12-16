const Nodes = require('./nodes');

const SingleNode = Nodes.SingleNode;

function recursivePrint(node) {
  if (node !== null) {
    console.log(node.data);
    recursivePrint(node.next);
  }
}

function recursiveReversePrint(node) {
  if (node !== null) {
    recursiveReversePrint(node.next);
    console.log(node.data);
  }
}

function recursiveCount(node) {
  if (node === null) {
    return 0;
  }
  else {
    return 1 + recursiveCount(node.next);
  }
}

function recursiveNodeAtPosition(position, node) {
  if (position === 0) {
    return node;
  }
  else {
    return recursiveNodeAtPosition(position - 1, node);
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
  }

  addAtStart(item) {
    const newNode = new SingleNode(item, null);
    newNode.next = this.head;
    this.head = newNode;
  }

  print() {
    recursivePrint(this.head);
  }

  reversePrint() {
    recursiveReversePrint(this.head);
  }

  count() {
    // Computational complexity O(n)
    recursiveCount(this.head)
  }

  getItemAt(position) {
    // Computational complexity O(position)
    return recursiveNodeAtPosition(position, this.head);
  }
};

const singleLinkedList = new SingleLinkedList();
singleLinkedList.addAtStart(1);
singleLinkedList.addAtStart(2);
singleLinkedList.addAtStart(3);
singleLinkedList.addAtStart(4);
singleLinkedList.addAtStart(5);

singleLinkedList.reversePrint();

module.exports = SingleLinkedList;