/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor () {
    this.array = [];
  }

  push(element) {
    // throw new Error('Not implemented');
    this.array.push(element);
  }

  pop() {
    // throw new Error('Not implemented');
    return this.array.splice(this.array.length - 1, 1)[0];
  }

  peek() {
    // throw new Error('Not implemented');
    return this.array[this.array.length - 1];
  }
}

module.exports = Stack;
