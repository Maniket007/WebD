


const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/PeakyBlinders')

.then(()=>{
    console.log("DB successfullly connected bhia maja agya ")
})
.catch((err)=>{
    console.log("DB not connected ")
    console.log(err)
})


//schema (bule-print)
let movieSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    year:Number,
    isWatched:Boolean
})

//model (JS Class)  ---> collection for DB
const Movie = mongoose.model('Movie', movieSchema); //-->class
// console.log(Movie);

//making a new object
let ironman = new Movie({
    name:"Ironman",
    rating:8,
    year:2015,
    isWatched:true
})
ironman.save(); //db ke andar save krr dega permanantly
console.log(ironman);