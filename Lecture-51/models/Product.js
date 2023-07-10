const  mongoose = require("mongoose");
const Review = require("./Review");
const productSchema = new mongoose.Schema({
    name: {
        type:String,
        trim:true,
        required:true
    },
    img: {
        type:String,
        trim:true,
    },
    price: {
        type:Number,
        min:0,
        required:true
    },
    desc: {
        type:String,
        trim:true
    },
    reviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Review'
        }
    ],
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
})

//middleware jo BTS mongosh opreations karwane par use hota hai and iske andar pre and post 
// middleware hote hai wchich are basically used over the schema and before the model.
productSchema.post('findOneAndDelete', async function(product){
    if(product.reviews.length>0){
        await Review.deleteMany({_id:{$in:product.reviews}})
    }
})
let Product = mongoose.model('Product',productSchema);
module.exports = Product;