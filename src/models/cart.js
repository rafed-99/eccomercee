const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({

    products : {
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Product"
    },
    quantity:{
        type:Number,
        required:[true,"write ur product quantity"],
        min:1
    }
});
const cart = mongoose.model("Cart",cartSchema);
module.exports = cart;