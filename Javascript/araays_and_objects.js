// js arrays are basically objects 
var arr = [1,2,3,4,6];
console.log(arr[3]);
console.log(arr["3"]);

var obj = {
    "1" : "10",
    "2" : "20",
    "3" : "30",
    "4" : "40"
}
console.log(obj[3]);
console.log(arr.length,obj.length);
obj.prop1 = "nitest"; //to add in object
console.log(obj);
arr.prop1 = "nitest" //add in array but it will not change the length
console.log(arr);