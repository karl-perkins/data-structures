import HashMap from "./hashmap.js";

const hashMap = new HashMap();

hashMap.set('Karl', 'foo');
hashMap.set('Perkins', 'bar');

console.log(hashMap.has('Karl'));
console.log(hashMap.length);

hashMap.remove('Karl');

console.log(hashMap.has('Karl'));
console.log(hashMap.length);