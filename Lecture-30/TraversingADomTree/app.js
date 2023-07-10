

//Properties..

//parent Element
let para1 = document.querySelector('#para1');

let arti1 = document.querySelector('#arti');
let div3 = document.querySelector('#div3');
// console.log(para1.parentElement())-----wrong way..
// console.log(para1.parentElement.parentElement.parentElement.parentElement);
// console.log(para1.parentElement.parentElement.parentElement.parentElement.parentElement);


//Chile Elelment
// console.log(arti1.children());---wrong way.
// let coll = arti1.children;
// for(let item of coll){
//     item.style.fontSize = '24px'
// }

//nextElement Sibling
// console.log(div3.nextElementSibling);

//previous element sibiling
console.log(div3.previousElementSibling);