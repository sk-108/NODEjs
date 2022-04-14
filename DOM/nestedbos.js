"use strict"; // now we have to declare variable with var, we can use this inside function aswell

var outerdiv = document.getElementById('outer');
    outerdiv.addEventListener('click',function()
    {
        console.log('click outer div');
    }
    );
var count = 0;
// count = 0; will give error

var innerdiv = document.getElementById('inner');
innerdiv.addEventListener('click',function(){
    count++;
    console.log('click inner div'+count);
    // it will click outer also as it is part of it so to stop is   
    event.stopPropagation();
})
