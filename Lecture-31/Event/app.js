


//inline way
// function doSomething(){
//     console.log('hello inline event');
// }

//2nd way
// let btn = document.querySelector('button');
// btn.onclick = function(){
//     console.log("hello duniya ye lo dusra tarika..")
// }

//mouseEnter Event..
// btn.onmouseenter = function(){
//     btn.style.color = 'red';
// }
//mouseleave Event..
// btn.onmouseleave = function(){
//     btn.style.color = 'black';
// }


// let btn = document.querySelector('button');

// function one(){
//     console.log('one');
// }
// function two(){
//     console.log('two')
// }
//jab bhi iss way se onclick karte hai to only we can perform one function at a time. 
// btn.onclick = one;
// btn.onclick = two;

// uppaer wale ka sollution---use eventListener
//it allows you to run multiple events on the same element.

// let btn = document.querySelector('button');

// function one(){
//     console.log('one');
// }
// function two(){
//     console.log('two')
// }
// btn.addEventListener('click',one);//accept two argument
// btn.addEventListener('click',two);//accept two argument



// let btn = document.querySelector('button');
// let bodyEl = document.querySelector('body');

// btn.addEventListener('click' , function(){
//     bodyEl.style.backgroundColor = 'plum';
// })

//onclick----> eq barr click kiya..
//ondbclick----> 2 barrr click kiya..

let btn = document.querySelector('button');
function merafun(){
    console.log("2 bar click hai eq barr")
}
btn.addEventListener('dblclick',merafun);