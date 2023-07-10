


const express = require('express')//function return karega..
const app = express(); //object

app.get('/search',(req,res)=>{
    console.log(req.query);
    console.log(req.query.serach);
    let {serach} = req.query;
    console.log(serach);

    // res.send(serach);

    res.send(req.query);
})

app.listen(8080,()=>{
    console.log('mera server chall gaya hai bhai log.')
})
