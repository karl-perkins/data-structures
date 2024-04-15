import HashMap from "./hashmap.js";

const hashMap = new HashMap();

console.log(hashMap.set('Karl', 'Hello World'));
console.log(hashMap.set('Carlos', 'Hello World'));

console.log(hashMap.buckets);