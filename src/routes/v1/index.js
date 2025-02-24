const express = require("express");
const router = express.Router();

const cityController = require('../../controller/city-controller')

router.post('/city', cityController.create);
router.post('/cities', cityController.createCities);
router.put('/city/:id', cityController.update);
router.delete('/city/:id', cityController.destroy);
router.get('/city/:id', cityController.get);
router.get('/city', cityController.getAll);

module.exports = router;