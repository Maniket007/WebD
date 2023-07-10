
//slice..
// let arr = [10,20,30,40,50,60];
// console.log(arr);
// console.log(arr.slice(2));
// console.log(arr.slice(2,4));
// console.log(arr);

//splice..
// console.log(arr.splice(3));
// console.log(arr);

//split
// let url = 'https://google.com/search/dog/best/color/black';
// let ans = url.split('/');
// console.log(ans);

//join
// console.log(ans.join('/'));

//concat..
// let arr = [10,20,30,40,50,60];
// let arr2 = ['sam','mohd','hardik'];
// console.log(arr.concat(arr2));

//includes
// let arr2 = ['sam','mohd','hardik'];
// console.log(arr2.includes('mohd'));

//reverse
// let str = 'Maniket';
let arr = [10,20,30,40,50,60];
console.log(arr.reverse());
// function Person(firstname, lastname, mail){
//     this.firstName = firstname;
//     this.lastName = lastname;
//     this.email = mail;
// }
// Person.prototype.printName = function(){
//     console.log(`my name is ${this.firstName} ${this.lastName}`)
// }

// Person.prototype.getName = function(){
//     return(`${this.firstName} ${this.lastName}`)
// }

// let person1 = new Person('Sam','Vohra','sam@gmail.com');
// console.log(person1);
// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.email);
// console.log(person1.getName());
// console.log(person1.printName());

// ----------------------------

//class Syntax

// class Person{
//     constructor(firstname, lastname, mail){
//         this.firstName = firstname;
//         this.lastName = lastname;
//         this.email = mail;
//     }
//     getName(){
//         return(`${this.firstName} ${this.lastName}`)
//     }
//     printName(){
//         console.log(`my name is ${this.firstName} ${this.lastName}`)
//     }
// }

// class Student extends Person{
//     constructor(firstname, lastname, mail, groupnumber){
//         super(firstname, lastname, mail);
//         this.group = groupnumber;
//     }
//     getName(){
//         return(`super se bhi upper ${this.firstName} ${this.lastName}`)
//     }
// }
// let student1 = new Student('barack','obama','obama@gmail.com',100)
// console.log(student1);
// console.log(student1.email);
// console.log(student1.group);
// console.log(student1.getName());

// let person2 = new Person('ms','dhoni','masd@gmail.com')
// console.log(person2);
// console.log(person2.email);
// console.log(person2.lastName);
// console.log(person2.firstName);
// console.log(person2.printName());
// console.log(person2.getName());


//-------------------------------------------------------

//1. regular invocation..
// function fn(){
//     console.log(this);
// }
// fn();

//2. method invocation..
// let obj = {
//     number: 2,
//     fn: function(){
//         console.log(this)
//     }
// }
// let myFun = obj.fn();

// let obj = {
//     number: 2,
//     fn: function(){
//         console.log(this)
//     }
// }
// let myFun = obj.fn;
// myFun();

// let obj2={
//     fn: function(){
//         function calculate(){
//             console.log(this);
//         }
//         calculate();
//     }
// }
// obj2.fn();

//3.construtor function calling..
// function Createobj(){
//     this.x=20;

// }
// let obj = new Createobj();
// console.log(obj);
// console.log(obj.x);

//4. Indirect calling--- .call(), .apply(), .bind()
// let obj = {
//     a:20,
//     fn:function(a,b,c){
//         console.log(this,a,b,c);
//     }
// }
// let obj2 = {
//     a:50

// }
// let obj3 = {
//     name: 'samarth'
// }
// obj.fn();
// obj2.fn();//error
// obj.fn.call(obj,1,2,3);
// obj.fn.call(obj3,1,2,3); //jab bhi call methid ka use krr rhe ho tab jo call ke andar mention krte ho aapka usee point karta hai..
// obj.fn.apply(obj,[1,2,3]);

// let obj3 = {
//     fn:function(){
//         console.log(this)
//     }
// }
// let myfun = obj3.fn.bind(obj3);
// myfun();

//Arrow function..