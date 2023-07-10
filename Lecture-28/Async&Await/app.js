// function some(){

// }
// console.log(some());
//retunr undefined..

// let p1 = new function(){

// }
// console.log(p1);
//return an empty object...

//--------------------
async function some(){
    await new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('3 second ho gaya');
            resolve();
        },3000)
    })
    await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('2 second ho gaya');
            resolve()
        },2000)
    })
    console.log('dono kam hogaye bhai');
}
some();