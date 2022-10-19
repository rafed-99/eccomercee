const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({

    nameCategory : {
        type:String,
        required:[true, "name category required"],
        maxLength:[20 , "name category max length reached"]
    },
    products : [
        {
            type:mongoose.SchemaTypes.ObjectId,
            ref:"Product"
        }
    ],

})

const category = mongoose.model("Category",categorySchema);
module.exports = category;