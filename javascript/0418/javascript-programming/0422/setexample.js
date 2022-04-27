const set1 = new Set([1,2,3,4,5]);

var mySet = new Set();

mySet.add(1); 

mySet.add(5); 
mySet.add('some text'); 

var o = {a:1, b:2};
mySet.add(o);

mySet.add({a:1, b:2});

console.log(mySet);

var myArr = Array.from(mySet);
console.log(myArr);

mySet2 = new Set([1,2,3,4]);

console.log(mySet2.size);

