//forEach() ----> method (array)
let students = ['aple', 'pineaaple', 'grape', 'mango', 'gauva'];

students.forEach(function(item){
    console.log(item)
})
students.forEach(function(sachin, manish){
    console.log(`index was ${manish} --> juice was ${sachin}`)
})

//map() ---->method(array)
let marks = [10,15,18,9,28,12,5,40];
let newMarksArray = marks.map(function(item,index){
    return [item*2, index];
})
console.log(marks);
console.log(newMarksArray);

//filter() ----->method(array)
let marks1 = [1,2,3,4,5,6,7,8,9,10];
let filteredArray = marks1.filter(function(item,index){
    if(item>=5){
        // console.log(index);
        return true;
    }
    return false;
})
console.log(marks1);
console.log(filteredArray);

//sort()
// let arr = [16,12,2,34,3,88,90,36,76];
let arr = ['sam' , 'samarth' , 'aryan' , 'aarav' , 'ayush' ,'AArav','Ayush'];
let newArray = arr.sort(function(a,b){
    return a-b;  //ascending order..
    // return b-a; //descending order..
});
console.log(newArray);