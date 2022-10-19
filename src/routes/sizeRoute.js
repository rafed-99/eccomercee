const sizeController = require('../controllers/sizeController');
const router = require('express').Router();

router.get("/getsize",sizeController.GetSize);
router.get("/getsize/:id",sizeController.GetSizeById);
router.post("/addsize",sizeController.AddSize);
router.put("/updatesize/:id",sizeController.UpdateSize);
router.delete("/deletesize/:id",sizeController.DeleteSize);

module.exports = router;