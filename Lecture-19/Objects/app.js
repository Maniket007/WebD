let person={
    //key --> value
    name: 'Maniket',   //property 1
    age:27,             //property 2
    isMale:true,        //property 3
    favColor:'Light Green' //property 4
};

// console.log(person);
// console.log(person.name);
// console.log(person.favColor);
// console.log(person.age);
// console.log(person.isMale);

// console.log(person[age]);
// console.log(person['age']);

let person2 = person;
person2.name="Sam Vohra";
console.log(person2.name);
console.log(person.name);
console.log(person2.age);