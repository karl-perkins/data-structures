import LinkedList from "./linkedlist.js";

export default class HashMap {
  buckets = Array.from(Array(16), () => new LinkedList());

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode %= this.buckets.length;
    }

    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key) % this.buckets.length;

    if (index < 0 || index >= this.buckets.length) {
      throw new Error('Trying to access index out of bound');
    }

    this.buckets[index].append(value);
  }
}