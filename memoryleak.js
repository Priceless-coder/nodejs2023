//3 common memory leak mistakes 

// 1: global variables 
var a =1;
var b =1 ;
var c = 1;


//2: Event Listners (not removing after page change )
var element = document.getElementById('button');
element.addEventListener('click',onclick)


//3:setInterval

setInterval(()=>{
    //referencing objects 

    //This piece of code is not collected by garbage collector and it keep running .
})

