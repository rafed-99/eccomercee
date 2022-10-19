const colorController = require('../controllers/colorController');
const router = require('express').Router();

router.get("/getcolor",colorController.GetColor);
router.get("/getcolor/:id",colorController.GetColorById);
router.post("/addcolor",colorController.AddColor);
router.put("/updatecolor/:id",colorController.UpdateColor);
router.delete("/deletecolor/:id",colorController.DeleteColor);

module.exports = router;