





// let formEL = document.querySelector('form');
// formEL.addEventListener('submit',function(event){
//     event.preventDefault(); //default behaviour rokk deta hai..
//     console.log('form submitted');
// })


let formEL = document.querySelector('form');
formEL.addEventListener('submit',function(e){
    e.preventDefault();
    console.log(formEL.elements[0].value);
    console.log(formEL.elements[1].value);
})