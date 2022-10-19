const countryFabricationController = require('../controllers/countryFabricationController');
const router = require('express').Router();

router.get("/getcountryfabrication",countryFabricationController.GetCountryFabrication);
router.get("/getcountryfabrication/:id",countryFabricationController.GetCountryFabricationById);
router.post("/addcountryfabrication",countryFabricationController.AddCountryFabrication);
router.put("/updatecountryfabrication/:id",countryFabricationController.UpdateCountryFabrication);
router.delete("/deletecountryfabrication/:id",countryFabricationController.DeleteCountryFabrication);

module.exports = router;