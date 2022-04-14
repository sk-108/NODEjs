function multiply(a,b)
{
    return a*b;
}

console.log(multiply);

arry = [60,70,20,10,40,90];
function text(x)
{
    return x>5;
}
if(!arry.every(text))
{
    console.log("statement 1");
}
else{
    console.log("statement 2");
}
console.log(arry.every);

hoisted;
var hoisted = function()
{
    console.log("bar");
}
hoisted;
