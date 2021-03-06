const Nodes = require('./nodes');

const SingleNode = Nodes.SingleNode;

class Queue {
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

  enqueue(item) {
    const newNode = new SingleNode(item, null);
    if (this.head === null) {
      this.head = newNode;
    }
    else {
      let currentNode = this.head;
      while (currentNode.next != null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }

  dequeue() {
    const data = this.head.data;
    this.head = this.head.next;
    return data;
  }
}

module.exports = Queue;