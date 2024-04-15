export default class Node {
  key = null;
  value = null;
  next = null;

  constructor(key, value, next) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
}