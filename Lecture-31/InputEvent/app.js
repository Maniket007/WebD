

// let inputEL = document.querySelector('input');

// // inputEL.addEventListener('input', function(){
// //     console.log('input event chll gaya bhai logo')
// // })

// function fun(event){
//     console.log(event.target.value);
//     // console.log('input ele chll gaya loo')
// }
// inputEL.addEventListener('input', fun);

let inputEL = document.querySelector('input');
let h2tag = document.querySelector('h2');
function fun(){
    h2tag.innerText = event.target.value;
}
inputEL.addEventListener('input',fun);