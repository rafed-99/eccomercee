const countryFabrication = require("../models/countryFabrication");

const GetCountryFabrication = (req,res) => {
    countryFabrication.find().then(
        response => {res.json({
            response
        })
    }).catch(error => {
        res.json({
            message:"error"
        })
    })
}
    
const GetCountryFabricationById = (req,res) =>{

    countryFabrication.findById(req.params.id).then(
        response => res.json({
            response
        })
    ).catch(error => {
        res.json({
            message:"error"
        })
    })

}

const AddCountryFabrication = (req,res) =>{
    let newCountryFabrication = new countryFabrication({
        country : req.body.country
    })
    newCountryFabrication.save().then(
        response => res.json({
            response
        })
    ).catch(error => {
        res.json({
            message: "error"
        })
    })
}

    const UpdateCountryFabrication = (req,res) =>{
        let newCountryFabrication ={
            country : req.body.country
        }
        countryFabrication.findByIdAndUpdate(req.params.id,{$set :newCountryFabrication}).then(
            response => res.json({
                response
            })
        ).catch(error => {
            res.json({
                message: "error"
            })
        })
    }

    const DeleteCountryFabrication = (req,res) =>{
        countryFabrication.findByIdAndRemove().then(response => {
            res.json({
                response
            })
        }).catch(error => {
            res.json({
                message : "Error"
            })
        })
    }

    module.exports = {GetCountryFabrication,GetCountryFabricationById,AddCountryFabrication,UpdateCountryFabrication,DeleteCountryFabrication}


