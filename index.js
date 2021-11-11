class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
};

function printLinkedList(node) {
  let currentNode = node;
  while (currentNode != null) {
    console.log(currentNode.data);
    currentNode = currentNode.next;
  }
};

function printLinkedListRecursive(node) {
  if (node !== null) {
    console.log(node.data);
    printLinkedListRecursive(node.next);
  }
};

function printLinkedListReverseRecursive(node) {
  if (node !== null) {
    // we only need to swap two lines to print the LL in reverse
    printLinkedListRecursive(node.next);
    console.log(node.data);
  }
}

function addNodeToEnd(head, newNode) {
  let lastNode = head;
  while (lastNode.next !== null) {
    lastNode = lastNode.next;
  }
  lastNode.next = newNode;
}

function addNodeToEndRecursive(node, newNode) {
  if (node === null) {
    return newNode;
  }
  else {
    node.next = addNodeToEndRecursive(node.next, newNode);
    return node;
  }
}

function countNodes(node) {
  let currentNode = node;
  let count = 0;
  while (currentNode !== null) {
    currentNode = currentNode.next;
    count = count + 1;
  }
  return count;
}

function countNodesRecursive(node) {
  if (node === null) {
    return 0;
  }
  else {
    return 1 + countNodesRecursive(node.next);
  }
}

let head = new Node(5, new Node(6, new Node(7, new Node(8, null))));
const nodeToAddToEnd = new Node(9, null);
addNodeToEnd(head, nodeToAddToEnd);
addNodeToEndRecursive(head, new Node(10, null));
addNodeToEndRecursive(head, new Node(11, null));

const numberOfNodes = countNodesRecursive(head);
console.log(numberOfNodes);