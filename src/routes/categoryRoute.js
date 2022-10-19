const categoryController = require('../controllers/categoryController');
const router = require('express').Router();

router.get("/getcategory",categoryController.GetCategory);
router.get("/getcategory/:id",categoryController.GetCategoryById);
router.post("/addcategory",categoryController.AddCategory);
router.put("/updatecategory/:id",categoryController.UpdateCategory);
router.delete("/deletecategory/:id",categoryController.DeleteCategory);

module.exports = router;