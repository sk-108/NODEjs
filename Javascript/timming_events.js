var sec = 1;
function sayhello()
{
    console.log("hare Krishna ",sec);
    sec++;
    if(sec == 4)
    {
        clearInterval(id);
    }
}
// setTimeout(sayhello,3000); //second parameter is in millisecond
var id = setInterval(sayhello,3000); // it  will perform after every 3000 millisecond interval

//count down timer
var count = 10;
function timer()
{
    console.log(count);
    count--;
    if(count == 0){
        clearInterval(id);
    }
}

var id = setInterval(timer,1000);