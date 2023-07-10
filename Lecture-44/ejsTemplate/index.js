
const express = require('express')//function return karega..
const app = express(); //object

app.set('view engine', 'ejs'); //view engine ko set krdia hai takki template dekh paao
app.set('views' , path.join(__dirname , 'views')); //better



const todos = ['go to gym' , 'go to club' , 'drink water'];

//root route
app.get('/',(req, res)=>{
    // res.send('HI')
    res.render('index');
})

//random file route
app.get('/random', (req,res)=>{
    // logic likhne ke baad ans ko template ke andar bhej dunga
    let number =  Math.floor ( Math.random() * 100 ) 
    res.render('random' , {number} );
})


app.listen(8080,()=>{
    console.log('mera server chall gaya hai bhai log.')
})

