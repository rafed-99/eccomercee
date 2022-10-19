const cart = require("../models/cart");

const GetCart = (req,res) => {
    cart.find().populate({path:products}).then(
        response => {res.json({
            response
        })
    }).catch(error => {
        res.json({
            message:"error"
        })
    })
}
    
const GetCartById = (req,res) =>{

    cart.findById(req.params.id).then(
        response => res.json({
            response
        })
    ).catch(error => {
        res.json({
            message:"error"
        })
    })

}

const AddCart = (req,res) =>{
    let newcart = new color({
        products : req.body.products,
        quantity : req.body.quantity
    })
    newcart.save().then(
        response => res.json({
            response
        })
    ).catch(error => {
        res.json({
            message: "error"
        })
    })
}

    const UpdateCart = (req,res) =>{
        let newcart ={
            products : req.body.products,
            quantity : req.body.quantity
        }
        cart.findByIdAndUpdate(req.params.id,{$set :newcart }).then(
            response => res.json({
                response
            })
        ).catch(error => {
            res.json({
                message: "error"
            })
        })
    }

    const DeleteCart = (req,res) =>{
        cart.findByIdAndRemove().then(response => {
            res.json({
                response
            })
        }).catch(error => {
            res.json({
                message : "Error"
            })
        })
    }

    module.exports = {GetCart,GetCartById,AddCart,UpdateCart,DeleteCart}



