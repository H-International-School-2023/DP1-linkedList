const Queue = require('./queue');
const Stack = require('./stack');

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);

// Can you reverse this queue using a stack?