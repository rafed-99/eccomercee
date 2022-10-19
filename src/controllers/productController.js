const product = require("../models/product");

const GetProduct = (req,res) => {
    product.find().populate({path:marque}).populate({path:colors}).populate({path:sizes}).populate({path:countryFabrication}).then(
        response => {res.json({
            response
        })
    }).catch(error => {
        res.json({
            message:"error"
        })
    })
}
    
const GetProductById = (req,res) =>{

    product.findById(req.params.id).then(
        response => res.json({
            response
        })
    ).catch(error => {
        res.json({
            message:"error"
        })
    })

}

const AddProduct = (req,res) =>{
    let newProduct = new product({
        refProduct : req.body.refProduct,
        marque : req.body.marque,
        nameProduct : req.body.nameProduct,
        colors : req.body.colors,
        sizes : req.body.sizes,
        countryFabrication : req.body.countryFabrication,
        price : req.body.price

    })
    newProduct.save().then(
        response => res.json({
            response
        })
    ).catch(error => {
        res.json({
            message: "error"
        })
    })
}

    const UpdateProduct = (req,res) =>{
        let newProduct ={
            refProduct : req.body.refProduct,
            marque : req.body.marque,
            nameProduct : req.body.nameProduct,
            colors : req.body.colors,
            sizes : req.body.sizes,
            countryFabrication : req.body.countryFabrication,
            price : req.body.price
        }
        product.findByIdAndUpdate(req.params.id,{$set :newProduct}).then(
            response => res.json({
                response
            })
        ).catch(error => {
            res.json({
                message: "error"
            })
        })
    }

    const DeleteProduct = (req,res) =>{
        product.findByIdAndRemove().then(response => {
            res.json({
                response
            })
        }).catch(error => {
            res.json({
                message : "Error"
            })
        })
    }

    const OrderAscProductName = (req,res) => {
        product.find().sort({nameProduct:1}).then(
            response => {res.json({
                response
            })
        }).catch(error => {
            res.json({
                message:"error"
            })
        })
    }

    const OrderDscProductName = (req,res) => {
        product.find().sort({nameProduct:-1}).then(
            response => {res.json({
                response
            })
        }).catch(error => {
            res.json({
                message:"error"
            })
        })
    }

    const OrderAscProductPrice = (req,res) => {
        product.find().sort({price:-1}).then(
            response => {res.json({
                response
            })
        }).catch(error => {
            res.json({
                message:"error"
            })
        })
    }

    const OrderDscProductPrice = (req,res) => {
        product.find().sort({price:-1}).then(
            response => {res.json({
                response
            })
        }).catch(error => {
            res.json({
                message:"error"
            })
        })
    }

    module.exports = {GetProduct,GetProductById,AddProduct,UpdateProduct,DeleteProduct,OrderAscProductName,OrderDscProductName,OrderAscProductPrice,OrderDscProductPrice}


