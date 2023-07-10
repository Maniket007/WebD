


const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');


// app.use(cookieParser());
app.use(cookieParser('you need a cat'));


app.get('/',(req,res)=>{
    console.log(req.cookies);
    // res.send(req.cookies); //all easy cookies
    res.send(req.signedCookies); //all signed cookies
})


app.get('/getsignedcookies',(req,res)=>{
    res.cookie('sonu', 'sinu', {signed:true});
    res.send('cookies send successfully');
})
// app.get('/setcookie',(req,res)=>{
//     res.cookie('mode','dark');
//     res.cookie('location','Noida');
//     res.cookie('username','Sonu');
//     res.send('server bhejga cookie ko yad rakhna hamesha');
// })


// app.get('/getcookies',(req,res)=>{
//     let {mode, location, username} = req.cookies;
//     res.send(`hi my name is ${username},stay in ${location} and theme is ${mode}`);
    
// })
app.listen(8080,()=>{
    console.log("server connected at 8080")
})