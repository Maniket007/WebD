// let products = document.querySelectorAll('section figure');
// console.log(products);
// not the optimize way..
// dynamically add karoge to dikkat dega
// for(let item of products){
//     item.addEventListener('click',function(){
//         console.log(this.innerText);
//     })
// }


let section = document.getElementById('container');
section.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target.nodeName === 'FIGURE'){
    console.log(e.target.innerText);
    }
})