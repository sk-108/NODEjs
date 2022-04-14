var name = "piyush";//global scope
console.log(name);

function scopedemo()
{
    // var name = "function";
    console.log(name);
}

scopedemo();
console.log(name);

//execution context
function c()
{
    console.log("Inside c");
}
function b()
{
    c();
    console.log("Inside b");
}
function a()
{
    b();
    console.log("Inside c");
}
a();
console.log("global context");

