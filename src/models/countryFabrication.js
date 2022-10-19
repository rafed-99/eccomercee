const mongoose = require('mongoose');
const countryFabricationSchema = new mongoose.Schema({

    country : {
        type:String,
        required:[true, "country required"],
        maxLength:[20 , "country max length reached"]
    }

})

const countryFabrication = mongoose.model("CountryFabrication",countryFabricationSchema);
module.exports = countryFabrication;