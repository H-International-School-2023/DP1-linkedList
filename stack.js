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
    // TODO: return the "first" item in the stack and remove it
    const nodeToReturn = this.head;
    this.head = nodeToReturn.next;
    return nodeToReturn.data;
  }
}

const stack = new Stack();

stack.push('Pringles 1');
stack.push('Pringles 2');
stack.push('Pringles 3');
stack.push('Pringles 4');

if (stack.isEmpty()) {
  console.log('is empty');
}
else {
  console.log('is not empty');
}

console.log(stack.pop());
console.log(stack.pop());