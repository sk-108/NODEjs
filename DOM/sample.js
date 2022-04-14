var heading = document.getElementById("one");
heading.style.color = 'red';
heading.style.backgroundColor = "cyan";

var headings  = document.getElementsByTagName("h1"); //fetches you the all h1 headings in array
headings[0].innerText = "first heading";

var para  = document.getElementsByClassName("two"); // also return  array of all para with this classname
para[1].innerText = "jai krishna";

//we can acces with css 
var heading = document.querySelector("#one");
heading.innerHTML = "haello"; 

var para = document.querySelector(".two"); // for class
para.innerHTML = " hare krishna sourav v" ;

//adding event listener
var helloButton = document.getElementById('btn');
helloButton.addEventListener('click',function(){
    alert('Hello');
})