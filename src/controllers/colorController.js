const color = require("../models/color");

const GetColor = (req,res) => {
    color.find().then(
        response => {res.json({
            response
        })
    }).catch(error => {
        res.json({
            message:"error"
        })
    })
}
    
const GetColorById = (req,res) =>{

    color.findById(req.params.id).then(
        response => res.json({
            response
        })
    ).catch(error => {
        res.json({
            message:"error"
        })
    })

}

const AddColor = (req,res) =>{
    let newcolor = new color({
        colores : req.body.colores
    })
    newcolor.save().then(
        response => res.json({
            response
        })
    ).catch(error => {
        res.json({
            message: "error"
        })
    })
}

    const UpdateColor = (req,res) =>{
        let newcolor ={
            colores : req.body.colores
        }
        color.findByIdAndUpdate(req.params.id,{$set :newcolor }).then(
            response => res.json({
                response
            })
        ).catch(error => {
            res.json({
                message: "error"
            })
        })
    }

    const DeleteColor = (req,res) =>{
        color.findByIdAndRemove().then(response => {
            res.json({
                response
            })
        }).catch(error => {
            res.json({
                message : "Error"
            })
        })
    }

    module.exports = {GetColor,GetColorById,AddColor,UpdateColor,DeleteColor}



