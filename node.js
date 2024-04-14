export default class Node {
  value = null;
  nextNode = null;

  constructor(value, nextNode) {
    this.value = value;
    this.nextNode = nextNode;
  }
}