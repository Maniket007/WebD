const express = require('express')
const app = express()

//middleware eq function hai jo har barr chalte hai..
// adding app.use

//without path i.e comming for all request..

// app.use((req, res)=>{//middle ware function/callback function..
//     // console.log(req);
//     // console.log(res);
//     console.log('you mad ea request')
//     res.send('<h1>shadi karwa do may jun jully me</h1>')
// })

//with path i.e specific path only not in other cases..
app.use('/middleware',(req, res)=>{//middle ware function/callback function..
    // console.log(req);
    // console.log(res);
    console.log('you mad ea request at specfic middleware')
    res.send('<h1>shadi karwa do may jun jully me</h1>')
})

app.listen(8080,()=>{
    console.log("server connected at 8080 port")
})