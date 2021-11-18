const Nodes = require('./nodes');
const singleLinkedListUtils = require('./singleLinkedListUtils');

const SingleNode = Nodes.SingleNode;


let singleHead = new SingleNode(5, new SingleNode(6, new SingleNode(7, new SingleNode(8, null))));
const singleNodeToAddToEnd = new SingleNode(9, null);
singleLinkedListUtils.addNodeToEnd(singleHead, singleNodeToAddToEnd);
singleLinkedListUtils.addNodeToEndRecursive(singleHead, new SingleNode(10, null));
singleLinkedListUtils.addNodeToEndRecursive(singleHead, new SingleNode(11, null));

const singleNumberOfNodes = singleLinkedListUtils.countNodesRecursive(head);
console.log(singleNumberOfNodes);