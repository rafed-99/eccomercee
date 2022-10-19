const mongoose = require('mongoose');
const colorSchema = new mongoose.Schema({

    colores : {
        type:String,
        required:[true, "colores required"],
        maxLength:[20 , "colores max length reached"]
    }

})

const color = mongoose.model("Color",colorSchema);
module.exports = color;