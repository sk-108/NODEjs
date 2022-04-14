var arr = [1,2,3,4,5];
console.log(arr);
var arr2 = new Array(1,2,3,4,5);
console.log(arr);
console.log(arr2[2]);
arr2[7] = 100;//it will insert empty element at arr[6] (undefined)
console.log(arr2);
console.log(arr2.length);
var a = new Array() ; // it will create new empty array
var b = new Array(4); // it will make array of size 4
console.log(b.length);