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
      this.head = newNode;
    }
    else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  pop() {
    // TODO: return the "first" item in the stack and remove it
  }
}

const stack = new Stack();

stack.push('Pringles 1');

if (stack.isEmpty()) {
  console.log('is empty');
}
else {
  console.log('is not empty');
}