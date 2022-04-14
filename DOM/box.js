var outerdiv = document.getElementById('outer');

outer.addEventListener('mouseover',function(){
    console.log("mouse over");
})

outer.addEventListener('mouseout',function(){
    console.log("mouseout ");
})

// var searchInput = document.getElementById('search');

// searchInput.addEventListener('keypress',function(){
//     console.log("keypress");
// })

document.addEventListener('keypress',function(){
         console.log("keypress");
 })

 document.addEventListener('keydown',function(event){
    console.log("keydown",event.keyCode);
})