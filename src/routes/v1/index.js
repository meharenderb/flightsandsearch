const express = require("express");
const router = express.Router();

const cityController = require('../../controller/city-controller')
const airportController = require('../../controller/airport-controller')
const airplaneController = require('../../controller/airplane-controller')
const flightController = require('../../controller/flight-controller')
const compareTime = require('../../utils/compareTime');
// City Routes
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

// Airplane Routes
router.post('/airplane', airplaneController.create);
router.put('/airplane/:id', airplaneController.update);
router.delete('/airplane/:id', airplaneController.destroy);
router.get('/airplane/:id', airplaneController.getAirplane);
router.get('/airplane', airplaneController.getAllAirplanes);

// Flight Routes
router.post('/flight', compareTime, flightController.createFlight);
router.post('/flights', flightController.getAllFlights);
router.get('/flights/:id', flightController.getFlightById);
router.patch('/flights/:id', flightController.updateFlightSeatsAvailability);

module.exports = router;