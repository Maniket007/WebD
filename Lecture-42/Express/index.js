


const express = require('express') // return a function..
const app = express() //it return an entire new object..

// console.log(app);


//ask server to listen your request..
app.listen(8080, ()=>{console.log("server running on 8080")})
// app.listen(8080)