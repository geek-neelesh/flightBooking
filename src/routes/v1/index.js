const express = require('express');
const router = express.Router();
const airplaneRoutes = require('./airplane-routes');
const cityRoutes = require('./city-routes');
const airportRoutes = require('./airport-routes');

// api/v/airplanes Post
console.log("inside v1 routes");
router.use('/airplanes', airplaneRoutes);
router.use('/cities',cityRoutes);
router.use('/airports',airportRoutes);


module.exports = router
