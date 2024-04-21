import LinkedList from "./linkedlist.js";

export default class HashMap {
  buckets = Array.from(Array(16), () => new LinkedList());
  length = 0;

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

    const foundNode = this.buckets[index].find(key);

    if (foundNode !== null) {
      this.buckets[index].find(key).value = value;
    } else {
      this.buckets[index].append(key, value);
    }

    this.length++;
  }

  get(key) {
    const index = this.hash(key) % this.buckets.length;

    if (index < 0 || index >= this.buckets.length) {
      throw new Error('Trying to access index out of bound');
    }

    const foundNode = this.buckets[index].find(key);

    return (foundNode !== null) ? foundNode.value : null;
  }

  has(key) {
    const index = this.hash(key) % this.buckets.length;

    if (index < 0 || index >= this.buckets.length) {
      throw new Error('Trying to access index out of bound');
    }

    const foundNode = this.buckets[index].find(key);

    return (foundNode !== null);
  }

  remove(key) {
    const index = this.hash(key) % this.buckets.length;

    if (index < 0 || index >= this.buckets.length) {
      throw new Error('Trying to access index out of bound');
    }

    const foundNodeIndex = this.buckets[index].findIndex(key);

    if (foundNodeIndex !== null) {
      this.buckets[index].removeAt(foundNodeIndex);
      this.length--;
      return true;
    }

    return false;
  }
}