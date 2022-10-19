const marque = require("../models/marque");

const GetMarque = (req,res) => {
    marque.find().then(
        response => {res.json({
            response
        })
    }).catch(error => {
        res.json({
            message:"error"
        })
    })
}
    
const GetMarqueById = (req,res) =>{

    marque.findById(req.params.id).then(
        response => res.json({
            response
        })
    ).catch(error => {
        res.json({
            message:"error"
        })
    })

}

const AddMarque = (req,res) =>{
    let newMarque = new marque({
        nameMarque : req.body.nameMarque
    })
    newMarque.save().then(
        response => res.json({
            response
        })
    ).catch(error => {
        res.json({
            message: "error"
        })
    })
}

    const UpdateMarque = (req,res) =>{
        let newMarque ={
            nameMarque : req.body.nameMarque
        }
        marque.findByIdAndUpdate(req.params.id,{$set :newMarque}).then(
            response => res.json({
                response
            })
        ).catch(error => {
            res.json({
                message: "error"
            })
        })
    }

    const DeleteMarque = (req,res) =>{
        marque.findByIdAndRemove().then(response => {
            res.json({
                response
            })
        }).catch(error => {
            res.json({
                message : "Error"
            })
        })
    }

    module.exports = {GetMarque,GetMarqueById,AddMarque,UpdateMarque,DeleteMarque}


