const express = require('express');
const app = express();
const path = require('path');//module of node js no need to install
const methodOverride = require('method-override')
const { v4: uuid } = require('uuid');

//dummy array instead of data base..
let comments = [
    {
        // id:0,
        id:uuid(),
        username:"Akshay",
        comment:"chalte hai bhai"
    },
    {
        // id:1,
        id:uuid(),
        username:"Sachin",
        comment:"chalte hai bhai aur aate hai kuch dur see"
    },
    {
        // id:2,
        id:uuid(),
        username:"Sonu",
        comment:"chalte hai bhai aur aate hai kuch dur see uske bad nasta karenge"
    },
    {
        // id:3,
        id:uuid(),
        username:"Maniket",
        comment:"chalte hai bhai aur aate hai kuch dur see uske bad nasta karenge phir so jayenge"
    }
]

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true})); //for form encoded data
app.use(methodOverride('_method')) //method overriding for post to patch

//root
app.get('/',(req,res)=>{
    res.send("root me apka bhaukal swagat hai ayiye")
})

//task-1 --> display all the blogs
app.get('/blogs',(req,res)=>{
    res.render('index',{comments})
})

//task-2 --> show a form for adding a new blog
app.get('/blog/new',(req,res)=>{
    res.render('new')
})

//task-3 --> to actually add a blog in the DB
app.post('/blogs',(req,res)=>{
    // console.log(req.body);
    let {username, comment} = req.body;
    comments.push({username, comment, id:uuid()});
    res.redirect('/blogs');
    // res.send("data aa gaya hai bhai logg")
})

//task-4 --> to show info about 1 particular blog..
app.get('/blogs/:id',(req,res)=>{
    let {id} = req.params;
    // console.log(id);
    let foundComment = comments.find(comment=>comment.id===id)
    // console.log(foundComment);
    // res.send("found comment chlaa ki nahi")
    res.render('show',{foundComment});
})

//task-5 --> to get the form for editing the blog...
app.get('/blogs/:id/edit',(req,res)=>{
    let {id} = req.params;
    let foundComment = comments.find(comment=>comment.id==id)
    // console.log(foundComment)
    // res.send('edit form aa gaya hai')
    res.render('edit',{foundComment});
})

//task-6 --> editing the blog using patch(ye thora data) and not put(ye sara data change kr dega)
app.patch('/blogs/:id', (req,res)=>{
    let {id} = req.params;
    let foundComment = comments.find(comment=>comment.id==id)
    // console.log(req.body);
    let {comment} = req.body;
    foundComment.comment = comment; //changing already present data to newly cal data.
    res.redirect('/blogs');
})

//task-7 --> to delete a blog from the DB
app.delete('/blogs/:id',(req,res)=>{
    let {id} = req.params;
    let newArray = comments.filter((comment)=>{return comment.id !=id})
    comments = newArray;
    res.redirect('/blogs');
})

app.listen(8080, ()=>{
    console.log("server running at port 8080")
})