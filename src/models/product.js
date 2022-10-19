const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({

    refProduct : {
        type : String,
        required : [true, "enter product reference"],
        minLength : [8, "enter product length from 8 caracters"],
        maxLength : [20, "enter product reference length minus than 20 caracters"],
        uppercase : true
    },
    marque : {
        type : mongoose.SchemaTypes.ObjectId,
        ref : "Marque"
    },
    nameProduct :{
        type:String,
        required : [true, "enter product name"],
        minLength : [5, "enter product name from 5 caracters"],
        maxLength : [30 , "enter product name minus than 30 caracters"]
    },
    colors : [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref:"Color"
        }
    ],
    sizes : [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "Size"
        }
    ],
    countryFabrication : {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "CountryFabrication"
    },
    price : {
        type : Number,
        required: [true,"write the price"]
    }

})

const product = mongoose.model("Product",productSchema);
module.exports = product;