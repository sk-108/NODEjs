//splice is used to make changes in an arrya to insert delete etc
var arr = [1,2,3,4,5];
arr.splice(1,3); //start index and length are the parameters 
console.log(arr);
arr.splice(1);
console.log(arr);
arr.splice(0,0,10);
console.log(arr);
//splice : start index , delection count  , elements to be inserted
