const { Stack, Queue, LinkedList } = require('./dataStructures');

// Stack tests

test('Stack: add elements and pop them', () => {
  const stack = new Stack();

  stack.push(1);
  stack.push(2);
  stack.push(3);

  expect(stack.pop()).toBe(3);
  expect(stack.pop()).toBe(2);
  expect(stack.pop()).toBe(1);
  expect(stack.isEmpty()).toBe(true);
});

// Queue tests

test('Queue: enqueue elements and dequeue them', () => {
  const queue = new Queue();

  queue.enqueue('A');
  queue.enqueue('B');
  queue.enqueue('C');

  expect(queue.dequeue()).toBe('A');
  expect(queue.dequeue()).toBe('B');
  expect(queue.dequeue()).toBe('C');
  expect(queue.isEmpty()).toBe(true);
});

// LinkedList tests

test('LinkedList: add elements and get size', () => {
  const linkedList = new LinkedList();

  linkedList.push(10);
  linkedList.push(20);
  linkedList.push(30);

  expect(linkedList.size()).toBe(3);
});