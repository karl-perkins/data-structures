import Node from './node.js';

export default class LinkedList {
  head = null;
  size = 0;

  append(key, value) {
    if (this.head === null) {
      this.head = new Node(key, value, null);
    } else {
      let currentNode = this.head;

      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }

      currentNode.next = new Node(key, value, null);
    }
    this.size++;
  }

  prepend(key, value) {
    if (this.head === null) {
      this.head = new Node(key, value, null);
    } else {
      this.head = new Node(key, value, this.head);
    }
    this.size++;
  }

  size() {
    return this.size;
  }

  head() {
    return this.head;
  }

  tail() {
    if (this.head === null) {
      return this.head;
    }

    let currentNode = this.head;

    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  at(index) {
    if (this.head === null) {
      throw new Error('Index out of bounds');
    }

    let currentIndex = 0;
    let currentNode = this.head;

    while (currentIndex < index) {
      if (currentNode.next === null) {
        throw new Error('Index out of bounds');
      }
      currentIndex += 1;
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  pop() {
    if (this.head === null) {
      throw new Error('Empty');
    }

    let previousNode = null;
    let currentNode = this.head;

    while (currentNode.next !== null) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    if (previousNode instanceof Node) {
      previousNode.next = null;
    } else {
      this.head = null;
    }

    this.size--;
    return currentNode;
  }

  contains(key) {
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.key === key) {
        return true;
      }
      currentNode = currentNode.next;
    }

    return false;
  }

  find(key) {
    let currentIndex = 0;
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.key === key) {
        return currentNode;
      }
      currentIndex += 1;
      currentNode = currentNode.next;
    }

    return null;
  }

  findIndex(key) {
    let currentIndex = 0;
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.key === key) {
        return currentIndex;
      }
      currentIndex += 1;
      currentNode = currentNode.next;
    }

    return null;
  }

  toString() {
    let listString = '';
    let currentNode = this.head;

    while (currentNode !== null) {
      listString += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.next;
    }

    listString += null;
    return listString;
  }

  insertAt(key, value, index) {
    const newNode = new Node(key, value);
    let previousNode = null;
    let currentNode = this.head;
    let currentIndex = 0;

    while (currentNode !== null && currentIndex < index) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      currentIndex++;
    }

    if (currentIndex === index) {
      if (previousNode === null) {
        newNode.next = this.head;
        this.head = newNode;
      } else {
        previousNode.next = newNode;
        newNode.next = currentNode;
      }
      this.size++;
    } else {
      throw new Error('Index of of range');
    }
  }

  removeAt(index) {
    if (this.head === null) {
      throw new Error('Index out of bounds');
    }

    let currentIndex = 0;
    let currentNode = this.head;
    // let nextNode = null;

    while (currentIndex < index) {
      currentIndex += 1;
      currentNode = nextNode;
      // nextNode = currentNode.next;
    }

    currentNode = currentNode.next;
  }
}
