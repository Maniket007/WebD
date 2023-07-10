
//constructor function...
// function Person(firstname, lastename, mail){
//     this.firstName = firstname;
//     this.lastName  = lastename;
//     this.email = mail;
// }
// Person.prototype.printName = function(){
//     console.log(`${this.firstName} ${this.lastName}`)
// }

// Person.prototype.getName = function(){
//     return(`${this.firstName} ${this.lastName}`)
// }
// let person1 = new Person('sam','vohra',"sa@gmail.com");
// console.log(person1);
// console.log(person1.firstName);
// console.log(person1.printName());
// console.log(person1.getName());


//class Syntax
class Person{
    constructor(firstname,lastename,mail){
        this.firstName = firstname;
        this.lastName  = lastename;
        this.email = mail;
    }
    getName(){
        return(`${this.firstName} ${this.lastName}`);
    }
    printName(){
        console.log(`My Name is ${this.firstName} ${this.lastName}`);
    }
}
class Student extends Person{
    constructor(firstname,lastename,mail,groupNo){
        super(firstname,lastename,mail)
        this.grouno=groupNo;
    }
}
let student1 = new Student('barack','obama','obama@gamil.com',100)
console.log(student1);
console.log(student1.email);
console.log(student1.grouno);
// let person2 = new Person('ms','dhoni','ms@gamil.com')
// console.log(person2);
// console.log(person2.email);
// console.log(person2.getName());
// console.log(person2.printName());