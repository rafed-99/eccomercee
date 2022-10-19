const mongoose = require('mongoose');
const marqueSchema = new mongoose.Schema({

    nameMarque : {
        type:String,
        required:[true, "country required"],
        maxLength:[20 , "country max length reached"]
    }

})

const marque = mongoose.model("Marque",marqueSchema);
module.exports = marque;