const Nodes = require('./nodes');

const SingleNode = Nodes.SingleNode;

class Stack {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    if (this.head === null) {
      return true;
    }
    else {
      return false;
    }
  }

  push(item) {
    const newNode = new SingleNode(item, null);
    if (this.head === null) {
      // If it's empty, add the new node to the head
      this.head = newNode;
    }
    else {
      // else the newNode becomes the head that points to the old head.
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  pop() {
    const nodeToReturn = this.head;
    this.head = nodeToReturn.next;
    return nodeToReturn.data;
  }
}

module.exports = Stack;