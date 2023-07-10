const express = require('express')
const app = express()

//get  asfjkbfasf
app.get('/',(req,res)=>{
    res.send('<h3>ye mera "/" path hai</h3>')
})

app.get('/cat',(req,res)=>{
    res.send('<h3>ye mera "/cat" path hai</h3>')
})

app.get('/dog',(req,res)=>{
    res.send('<h3>ye mera "/dog" path hai</h3>')
})

app.get('/orange',(req,res)=>{
    res.send('<h3>ye mera "/orange" path hai</h3>')
})

app.get('/watermellon',(req,res)=>{
    res.send('<h3>ye mera "/watermellon" path hai</h3>')
})

//bad request ko handle --->always at the last..
app.get('*',(req,res)=>{
    res.send("abeyy sale")
})

app.listen(8080,()=>{
    console.log("server connected at 8080 port")
})