

//regular invocation..
// function fn(){
//     console.log(this);
// }
// fn();


//method invocation
// let obj = {
//     number:2,
//     fn:function(){
//         console.log(this);
//     }
// }
// let myFun = obj.fn;
// myFun();

//constuctor function calling
// function CreateObj(){
//     this.x=20;
// }
// let obj = new CreateObj();
// console.log(obj);
// console.log(obj.x);

// .call(), .apply(), .bind()
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
//     name:'samarth'
// }
// obj.fn.call(obj2);
// obj.fn.call(obj,1,2,3);
// obj.fn.apply(obj2,[1,2,3]);

//.bind()
let obj3 = {
    fn:function(){
        console.log(this);
    }
}
let myfun = obj3.fn.bind(obj3);
myfun();