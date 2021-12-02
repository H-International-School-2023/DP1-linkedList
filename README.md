## Things to remember

### Linked list
Linked lists are ADT (Abstract Data Structure) that means their are not "included" in the programming language, we need to implement Linked List with code.

We need ADT because we cannot add o remove items from an array (**array -> fixed size**).

| Data type    | Pros             | Cons                       |
|--------------|------------------|----------------------------|
| array        | random access    | fixed size                 | 
| linked list  | NO random access | can add and remove items   |

### Queue

- FIFO -> First in first out
- Operations:
  isEmpty() -> Boolean [return true if the queue is empty, false otherwise]
  enqueue(item) -> void [add an item to the queue]
  dequeue() -> item [remove the item from the queue and returns it]

### Stack

- LIFO -> List in first out
- Operations:
  isEmpty() -> Boolean [return true if the stack is empty, false otherwise]
  push(item) -> void [add an item to the stack]
  pop() -> item [remove the item from the stack and returns it]