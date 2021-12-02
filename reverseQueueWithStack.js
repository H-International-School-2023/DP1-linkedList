const Queue = require('./queue');
const Stack = require('./stack');

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);

// TODO: reverse this queue using a stack?
// 1 -> 2 -> 3 -> 4 -> 5 -> 6 [START]
// 6 -> 5 -> 4 -> 3 -> 2 -> 1 [END]

const stack = new Stack();

while (!queue.isEmpty()) {
  const item = queue.dequeue();
  stack.push(item);
}
// now the queue is empty
// and the stack contains:
/*
    |6|
    |5|
    |4|
    |3|
    |2|
    |1|
*/
// I want to pop each item from the stack
// and add it again to the queue
while (!stack.isEmpty()) {
  const item = stack.pop();
  queue.enqueue(item);
}