


//forEach Method  (array)

// let students = ['Sachin','Hardik','manish','Maniket'];

// students.forEach(function(item){
//     console.log(item);
// })

// students.forEach(function(item){
//     console.log(item)
// })


// students.forEach(function(i,j){
//     console.log(`index was ${j} --> juice was ${i}`)
// })


//map()

// let marks = [10,15,18,9,28,12,5,40];
// let newMarks = marks.map(function(item, index){
//     return [item*2, index];
// })
// console.log(marks);
// console.log(newMarks);

//filter----index hta dena nahi krr sakte hai

// let marks = [1,2,3,4,5,6,7,8,9,10];
// let filteredArray = marks.filter(function(item,index){
//     if(item>=5){
//         // console.log(index);
//         return [true,index];
//     }
//     return false;
// })
// console.log(marks);
// console.log(filteredArray);

//sort()----lexiographically sort karega yeee...
// let arr=[12,2,23,3,88,90,16,36,76];
// let newArray = arr.sort(function(a,b){
//     // return a-b; //asc
//     return b-a; //desc
// });
// console.log(newArray);

// let menu  = ['palak panner', 'chole chawal', 'Chicken dhatura', 'panner buttermasala', 'manchuriyan', 'chicken B', 'PIZZA', 'SODA', 'Egg bhurji'];
// function isVeg(food){
//     if((food.toLowerCase().indexOf('chicken')!==-1)||food.toLowerCase().indexOf('egg')!==-1){
//         return false;
//     }
//     return true;
// }
// let vegMenu = menu.filter(isVeg)
// console.log(menu);
// console.log(vegMenu);

function somefunction(){
    let username = 'einstein';
    function printname(){
        console.log(username);
    }
    // printname();
    return printname;
}
let returnedvalue = somefunction();
returnedvalue();