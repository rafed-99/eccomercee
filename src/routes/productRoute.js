const productController = require('../controllers/productController');
const router = require('express').Router();

router.get("/getproduct",productController.GetProduct);
router.get("/getproduct/:id",productController.GetProductById);
router.post("/addproduct",productController.AddProduct);
router.put("/updateproduct/:id",productController.UpdateProduct);
router.delete("/deleteproduct/:id",productController.DeleteProduct);

module.exports = router;