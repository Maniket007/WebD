

//approach 1: --- Rejected...
// function fizzbuzz(n){
//     for(let i=1;i<=n;i++){
//         if(i%3===0 && i%5===0){
//             console.log('FizzBizz');
//         }
//         else if(i%5===0){
//             console.log('Buzz');
//         }
//         else if(i%3===0){
//             console.log('Fizz');
//         }
//         else{
//             console.log(i);
//         }
//     }
// }
// fizzbuzz(20);


//approac 2: ---little optimize ----> Partially selected.

// function fizzbuzz2(n){
//     for(let i=1;i<=n;i++){
//         let str="";
//         if(i%3===0){
//             str+='Fizz';
//         }
//         if(i%5===0){
//             str+='Buzz';
//         }
//         if(str===""){
//             str+=i;
//         }
//         console.log(str);
//     }
// }
// fizzbuzz2(20);

//approach 3: --optimize way
function fizzbuzz3(n){
    cnt3=1;
    cnt5=1;
    for(let i=1;i<=n;i++){
        let str="";
        if(cnt3==3){
            str +='fizz';
            cnt3=0;
        }
        if(cnt5==5){
            str +='Buzz';
            cnt5=0;
        }
        if(str==""){
            str +=i;
        }
        console.log(str);
        cnt3++;
        cnt5++;
    }
}
fizzbuzz3(20);