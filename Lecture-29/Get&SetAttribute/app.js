
//getAttribute
// let anchor = document.querySelector('a');
// console.log(anchor.getAttribute('href'));
// console.log(anchor.getAttribute('class'));

//setAttribute
// let anchor = document.querySelector('a');
// anchor.setAttribute('href','http://facebook.com');


//real life usage
// let h1 = document.querySelector('h1');
// h1.setAttribute('class','samarth');


let input = document.querySelector('input');
// console.log(input);
// input.setAttribute('type','color')
input.setAttribute('type','date')
// input.setAttribute('type','email')


let InEL = document.querySelector('input');
let h2 = document.querySelector('h2');
function funn(event){
    console.log(event.target.value);
    h2.innerText = event.target.value;
}
InEL.addEventListener('input', funn);