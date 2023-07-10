// let obj1 = {
//         evs : 90,
//         cn  : 90,
//         web : 100,
//         maths :  10,
//         total : function(){    //methods
//             return (90 + 90 + 100 + 10);
//         },
//         bulao : function(){
//             return ("sam ko bulao")
//         }
//     }

//using this keyword...

let obj2 = {
    namm:'Smaarth',
    evs : 90,
    cn  : 90,
    web : 100,
    maths :  10,
    total:function(){
        return(this.evs+this.cn+this.web+this.maths)
    },
    bulao:function(){
        return(`${this.namm} ko bulaoo`)
    }
}
console.log(obj2.total());
console.log(obj2.bulao());