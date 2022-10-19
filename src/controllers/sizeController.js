const size = require("../models/size");

const GetSize = (req,res) => {
    size.find().then(
        response => {res.json({
            response
        })
    }).catch(error => {
        res.json({
            message:"error"
        })
    })
}
    
const GetSizeById = (req,res) =>{

    size.findById(req.params.id).then(
        response => res.json({
            response
        })
    ).catch(error => {
        res.json({
            message:"error"
        })
    })

}

const AddSize = (req,res) =>{
    let newSize = new size({
        sizee : req.body.sizee

    })
    newSize.save().then(
        response => res.json({
            response
        })
    ).catch(error => {
        res.json({
            message: "error"
        })
    })
}

    const UpdateSize = (req,res) =>{
        let newSize ={
            sizee : req.body.sizee
        }
        size.findByIdAndUpdate(req.params.id,{$set :newSize}).then(
            response => res.json({
                response
            })
        ).catch(error => {
            res.json({
                message: "error"
            })
        })
    }

    const DeleteSize = (req,res) =>{
        size.findByIdAndRemove().then(response => {
            res.json({
                response
            })
        }).catch(error => {
            res.json({
                message : "Error"
            })
        })
    }

    module.exports = {GetSize,GetSizeById,AddSize,UpdateSize,DeleteSize}


