const { Stack, Queue, LinkedList } = require('./dataStructures');

// Example usage
const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

while (!stack.isEmpty()) {
  console.log('Pop:', stack.pop());
}

const queue = new Queue();

queue.enqueue('A');
queue.enqueue('B');
queue.enqueue('C');

while (!queue.isEmpty()) {
  console.log('Dequeue:', queue.dequeue());
}

const linkedList = new LinkedList();

linkedList.push(10);
linkedList.push(20);
linkedList.push(30);

console.log('Size:', linkedList.size());

console.log('LinkedList:', linkedList.toArray());