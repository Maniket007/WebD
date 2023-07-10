

let fs = require('fs');
// console.log(fs);

//we will perform CRUD(CREATE, READ, UPDATE, DELETE)

//CREATE or write in fs

// let data = 'neha kudne jaa rhi hai chatt see';
// let data2 = 'neha kudne jaa rhi hai chatt see dekh lo jake bhai log';


// fs.writeFile('abc.txt', data, {
//     encoding:'utf-8',
//     flag:'w'
// }, (err)=>{
//     if(err) {throw err}
//     console.log('file written successfully..')
// })

//or 
// fs.writeFileSync('abc.txt', data2)


//READ
// fs.readFile('abc.txt', {
//     encoding:'utf-8',
//     flag:'r'
// }, (err, data)=>{
//     if(err) {throw err}
//     console.log(data)
// })

//or

// let data = fs.readFileSync('abc.txt');
// console.log(data);
// console.log(data.toString());

//UPDATE

// fs.appendFile('abc.txt', 'samarth ka bhaukal', (err)=>{
//     if(err){throw err}
//     console.log("Update krr diya bhai logo ne");
// })

//or
// fs.appendFileSync('abc.txt','aag lag hai basti me hmmlog hai masti me');

//DELETE
// fs.unlink('abc.txt', (err)=>{
//     if(err){throw err}
//     console.log("mai badmas hu bhai is liye unlogo ne hata diya hai")
// })

//or
fs.unlinkSync('abc.txt')