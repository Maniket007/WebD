let PI = 3.145;
let magicNum = 68;

console.log('live class chl rha hai');
function sqr(num){
    return num*num;
}

let obj = {
    first:'Maniket',
    last:'Kumar',
    age:24,
    getNamm:function(){
        console.log(this.first +' ' + this.last);
    }
}

console.log(PI);
console.log(magicNum);
console.log(sqr(6));
console.log(obj.getNamm());