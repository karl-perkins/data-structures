import HashMap from "./hashmap.js";
import LinkedList from "./linkedlist.js";

// const hashMap = new HashMap();

// hashMap.set('Karl', 'foo');
// hashMap.set('Perkins', 'bar');
// console.log(hashMap.buckets[0]);

// hashMap.remove('Karl');
// console.log(hashMap.buckets[0]);
// // console.log(hashMap.has('Karl'));

const linkedlist = new LinkedList();
linkedlist.append('Karl', 'foo');
linkedlist.append('Simon', 'bar');

console.log(linkedlist.toString());

linkedlist.insertAt('Mike', 'baz', 1);

console.log(linkedlist.toString());