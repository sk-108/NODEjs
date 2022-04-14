//objects help grouping data and functionlaity 
// Their are 6 primitive and 1 object type 
// object are like key value pair
var student = {name:"nitesh" , rollNo : 44 , marks:90};
console.log(student);
//all the keys (properties are strings )
var obj  = new Object(); // another way to create new object 
console.log(student.marks);
console.log(student["marks"]);

var std = { "-name" : "sourav", rollNo:49};
// console.log(std.-name); invalid key name so this will not work
console.log(std["-name"]);//will work
function printProperty(obj,prop)
{
    console.log(obj[prop]);
}
var prop = "name";
printProperty(student,prop);
 
// delete the property in an object 
delete student.marks;
console.log(student);

//How objects are stored
var obj = {
    "p1" : 10
}
var obj2 = obj; // this will not create new object instead points to the same object
obj2.p1 = 100; 
console.log(obj);

// but is we create 
var obj3 = { //this will not point to the same location
    "p1" : 100
}
console.log(obj2 == obj);
console.log(obj3 == obj);

//iterating over objects 
for(var prop in student){
    console.log(prop,student[prop]);
}
var keys =    Object.keys(student);
console.log(keys);
var keys2 = Object.getOwnPropertyNames(student);
console.log(keys2);
