function showAlert(msg) // this is parameter
{
    console.log(msg);
}
showAlert("HelloWorld!!"); //argument

function sum(a,b)
{
    console.log(a,b);
    return a+b;
}
var result  = sum(5);
console.log(result);
//function hoisting 

console.log(j);

function hoistDemo()
{
    console.log(i);   //this is called variable hoisting
    var  i = 10;
    console.log(i);
}
hoistDemo();

var j = 30;