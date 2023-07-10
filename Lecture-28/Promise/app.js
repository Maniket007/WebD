//Promise..
// let promise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let data = 'hi dosto ye promise hai';
//         resolve(data);
//         let err = 'opps dikkat aa gayi hai bhai';
//         reject(err);
//         resolve('hi mai resolve ho gaya hu i.e .the()');
//         reject('hi mai bhai abb gaya hu yha see');
//     },3000);
// });
// promise.then(function(data){
//     console.log(data);
// }).catch(function(err){
//     console.log(err);
// })

let p1 = new Promise((resolve, reject)=>{
    console.log("3 second ka wait kro kam in progresss hai");
    setTimeout(()=>{
        // resolve()
        reject()
    },3000)
});
p1.then().catch()
p1.then(()=>{
    console.log("kamm process ho gaya hai")
})
.catch(()=>{
    console.log("error aa gya bhai ja re tu ");
})

//.then() chaining --- arise kr rhi hai problem ko

// let p1 = new Promise((resolve, reject)=>{
//     console.log('3 second ka wait kro kam ho jayega bhai');
//     setTimeout(()=>{
//         resolve();
//     },3000)
// });
// p1.then(()=>{
//     return new Promise((resolve, reject)=>{
//         console.log('promise run krdiya hai intezar kro ab');
//         setTimeout(()=>{
//             console.log('2 sec ka wait kro')
//             resolve();
//         },2000)
//     })
// })
// .then(()=>{
//     console.log("dono kam ho gaye mere");
// })