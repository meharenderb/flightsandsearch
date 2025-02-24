const express = require("express");
const router = express.Router();

const cityController = require('../../controller/city-controller')
const airportController = require('../../controller/airport-controller')

router.post('/city', cityController.create);
router.post('/cities', cityController.createCities);
router.put('/city/:id', cityController.update);
router.delete('/city/:id', cityController.destroy);
router.get('/city/:id', cityController.get);
router.get('/city', cityController.getAll);


// Airport Routes

router.post('/airport', airportController.create);
// router.post('/cities', airportController.createAirports);
router.put('/airport/:id', airportController.update);
router.delete('/airport/:id', airportController.destroy);
router.get('/airport/:id', airportController.getAirport);
router.get('/airport', airportController.getAllAirports);

module.exports = router;