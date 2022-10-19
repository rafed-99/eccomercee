const cartController = require('../controllers/cartController');
const router = require('express').Router();

router.get("/getcart",cartController.GetCart);
router.get("/getcart/:id",cartController.GetCartById);
router.post("/addcart",cartController.AddCart);
router.put("/updatecart/:id",cartController.UpdateCart);
router.delete("/deletecart/:id",cartController.DeleteCart)

module.exports = router;