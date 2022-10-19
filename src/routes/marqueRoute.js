const marqueController = require('../controllers/marqueController');
const router = require('express').Router();

router.get("/getmarque",marqueController.GetMarque);
router.get("/getmarque/:id",marqueController.GetMarqueById);
router.post("/addmarque",marqueController.AddMarque);
router.put("/updatemarque/:id",marqueController.UpdateMarque);
router.delete("/deletemarque/:id",marqueController.DeleteMarque);

module.exports = router;