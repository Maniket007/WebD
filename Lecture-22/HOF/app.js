//code. 1
// function a(akashy){ //HOF
//     console.log('Hi I am inside A');
//     akashy();
// }
// function b(){
//     console.log('Hi I am inside B');
// }
// a(b);

//code. 2
// function a(){
//     console.log('inside a');
//     function b(){
//         console.log('inside b');
//     }
//     return b;
// }
// let temp = a();
// console.log(temp);


// function getBoolean(array){
//     let result = [];
//     for(let item of array){
//         if (typeof item === 'boolean'){
//             result.push(item);
//         }
//     }
//     return result;
// }
// function getString(array){
//     let result = [];
//     for(let item of array){
//         if (typeof item === 'string'){
//             result.push(item);
//         }
//     }
//     return result;
// }
// function getNumber(array){
//     let result = [];
//     for(let item of array){
//         if (typeof item === 'number'){
//             result.push(item);
//         }
//     }
//     return result;
// }

// let arr = ['sam' , 'samarth' , 10, 20 , true , false , true];
// console.log(getBoolean(arr));
// console.log(getString(arr));
// console.log(getNumber(arr));

//optimised HOF way..
// function getBoolean(item){
//     return typeof item ==='boolean';
// }
// function getString(item){
//     return typeof item ==='String';
// }
// function getNumber(item){
//     return typeof item ==='number';
// }
function get(array, fn){
    let result = [];
    for(let item of array){
        if(fn(item)){
            result.push(item);
        }
    }
    return result;
}
// let arr = ['sam' , 'samarth' , 10, 20 , true , false , true];
// console.log(get(arr, getBoolean));
// console.log(get(arr, getString));
// console.log(get(arr, getNumber));



//cond.1
// function a(fn){
//     console.log('hi i am inside A');
//     fn();
// }
// function b(){
//     console.log('hi i am inside B');
// }
// a(b);

function a(){
    console.log('inside a');
    function b(){
        console.log('inside b');
    }
    return b;
}
let temp = a();
console.log(temp);