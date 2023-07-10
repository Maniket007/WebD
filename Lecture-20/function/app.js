//function definition

function sum(){
    let num1=10;
    let num2=20;
    console.log(num1+num2);
}
//function ccalling.
// sum();
// console.log(sum());

// sum();
// sum();
// sum();

//parameterise function...
function triple(num3){//parameter
    num1=10;
    num2=10;
    console.log(num1+num2+num3);
}
// triple(100);//argument
// triple(90);//argument
// triple(20);//argument
// triple(10);//argument


//return something from a function..
function sum2(){
    let num1=90;
    let num2=90;
    return(num1+num2);
}
// console.log(sum2());

//multiple parameter.
function sam(num1, num2){
    return num1+num2;
}
// console.log(sam(30,40));

//NAN
function sam(num1, num2){
    return num1+num2;
}
// console.log(sam(30));

//nothing returned and less argument..
function sam1(num1, num2){
    console.log(num1);//30
    console.log(num2);//undefined
}
// console.log(sam1(30));//kuch nahi return hoga //undefined..

//default parameterised function..
function sam2(num1, num2=40){
    console.log(num1);
    console.log(num2);
}
// sam2(20);
// sam2(20,50);

//default parameterised functions..
function sam2(num1=40, num2){
    console.log(num1);//20
    console.log(num2);//undefined..
}
sam2(20);
sam2(20,50);
