var arr = [1,2,3,4,5,6]
for(var i = 0;i<arr.length;i++)
{
    console.log(arr[i]);
}
function print(element)
{
    console.log(element);
}
arr.forEach(print);//print function is applied to all the elements in the array     

var a = 10;
function test()
{
    a = 20;
}
test();
console.log(a);