const category = require("../models/category");

const GetCategory = (req,res) => {
    category.find().populate({path:subcategories}).then(
        response => {res.json({
            response
        })
    }).catch(error => {
        res.json({
            message:"error"
        })
    })
}
    
const GetCategoryById = (req,res) =>{

    category.findById(req.params.id).then(
        response => res.json({
            response
        })
    ).catch(error => {
        res.json({
            message:"error"
        })
    })

}

const AddCategory = (req,res) =>{
    let newCategory = new category({
        nameCategory : req.body.nameCategory,
        products : req.body.products
    })
    newCategory.save().then(
        response => res.json({
            response
        })
    ).catch(error => {
        res.json({
            message: "error"
        })
    })
}

    const UpdateCategory = (req,res) =>{
        let newCategory ={
            nameCategory : req.body.nameCategory,
            products : req.body.products
        }
        category.findByIdAndUpdate(req.params.id,{$set :newCategory }).then(
            response => res.json({
                response
            })
        ).catch(error => {
            res.json({
                message: "error"
            })
        })
    }

    const DeleteCategory = (req,res) =>{
        category.findByIdAndRemove().then(response => {
            res.json({
                response
            })
        }).catch(error => {
            res.json({
                message : "Error"
            })
        })
    }

    module.exports = {GetCategory,GetCategoryById,AddCategory,UpdateCategory,DeleteCategory}



