const mongoose = require('mongoose');
const sizeSchema = new mongoose.Schema({

    sizee : {
        type:String,
        required:[true, "sizes required"],
        maxLength:[5 , "sizes max length reached"]
    }

})

const size = mongoose.model("Size",sizeSchema);
module.exports = size;