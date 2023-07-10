

//file 1
// let pi = Math.PI;
// console.log(pi);

// let ans1 = num => num*num;
// let ans2 = (a,b) => a+b;

// console.log(ans1);
// console.log(ans2);

//export behaviour show karega becoz require dekh liya..
//by default exports an empty object {}

// module.exports = {}  //by default empty object..

module.exports = {pi,ans1,ans2}; //why not this be a key value pair

//obj == key:value
//key and value are same...
// module.exports = {
//     pi:pi, //----->pi
//     ans1:ans1,  //->ans1
//     ans2:ans2    //->ans2
// }

// module.exports = {
//     pi, //----->pi
//     ans1,  //->ans1
//     ans2    //->ans2
// }

//kya hmm objectc ki jagah kuch aur bhecj sakte hai?
module.exports = 'parchun ki dunkan hai bhai ye to';