var factorial  = function fact(a)
{
    var ans = 1;
    for(var i = 1;i<=a;i++)
    {
        ans *=i;
    }
    return ans;
}

console.log(factorial(5));
// console.log(fact(5)); //returns error 
console.log(factorial); //will print the function 
var factorial2 = function fact(a)
{
    var ans = 1;
    for(var i = 1;i<=a;i++)
    {
        ans *=i;
    }
    return ans;
}

console.log(factorial2); // it will name the function as factorial2 instead of fact()

//function declaration vs function Expressions
console.log(factt(5));
// console.log(factoriall(5)); //it will return error
//prime difference is function hoisting as function declaration are hoisted and function expressions are not;

function factt(a)
{
    var ans = 1;
    for(var i = 1;i<=a;i++)
    {
        ans *=i;
    }
    return ans;
}

var factoriall = function fact(a)
{
    var ans = 1;
    for(var i = 1;i<=a;i++)
    {
        ans *=i;
    }
    return ans;
}
console.log(factoriall(5));