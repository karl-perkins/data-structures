import HashMap from "./hashmap.js";

const hashMap = new HashMap();

hashMap.set('Karl', 'foo');
console.log(hashMap.get('Karl'));
hashMap.set('Karl', 'bar');
console.log(hashMap.get('Karl'));
console.log(hashMap.has('Karl'));