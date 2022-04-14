//arrays are heterogenous as here dynammic binding is used 
var arr = [1,2,3,4,5];
arr.push(6);
console.log(arr);
console.log(arr.length);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr); // arry will become 2 3 4 5
//to go right we can do unshift
arr.unshift(9);
console.log(arr);
