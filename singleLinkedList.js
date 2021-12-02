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
    // TODO: What is the computational complexity of this function?
    // Big O notation
    recursiveCount(this.head)
  }

  getItemAt(position) {
    // TODO: try to get the element at position "position"
    // in a iterative way and in a recursive way
    // TODO: What is the computational complexity of this function?
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