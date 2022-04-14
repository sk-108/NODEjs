var factorial = function fact(n)
{
    var ans = 1;
    for(var i=1;i<=n;i++)
    {
        ans *=i;
    }
    return ans;
}

function ncr(a,b,factorial)//or er can wite ncr(a,b,fact())
{
    return factorial(a)/(factorial(b)*factorial(a-b));
}

console.log(ncr(5,2,factorial));