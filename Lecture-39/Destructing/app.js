//Array dest...
// let fruits = ['apple', 'gauva','mango','banana','lichi','pineaaple']

//older way
// let first = fruits[0];//apple
// let second = fruits[1];//gauva
// console.log(first);
// console.log(second);

//destructure an array

// let [sachin, manish, third, forth] = fruits;
// console.log(sachin);
// console.log(manish);
// console.log(third);

//default value..
// let fruits1 = ['apple', 'gauva', 'mango'];
// let [sachin, manish, third, forth='anans'] = fruits1;
// console.log(sachin);
// console.log(manish);
// console.log(third);
// console.log(forth);//ananas


//override..
let fruits1 = ['apple', 'gauva', 'mango', 'grapes'];
let [sachin,manish,third,forth='anans']=fruits1;
console.log(sachin);
console.log(manish);
console.log(third);
console.log(forth);//grapes..

//------------------------------------------------------
//object dest
let car = {
    name:'nano',
    price:10000
}
//older way..
// let n = car.name;
// let p = car.price;
// console.log(n);
// console.log(p);

//better way..
//object destructing..
// let {n,p} = car;//wrong way..
// let {name,price} = car;//right way
// console.log(name);
// console.log(price);

//key chaining..
// let {name:n, price:p} = car;//right way..
// console.log(n);
// console.log(name);//wrong way..
// console.log(p);
// console.log(price);//wrong way

//default values..
let {name:namm="maruti",price} = car;
console.log(namm);
console.log(price);