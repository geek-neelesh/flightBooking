const express = require('express');
const router = express.Router();
const airplaneRoutes = require('./airplane-routes');

// api/v/airplanes Post
console.log("inside v1 routes");
router.use('/airplanes', airplaneRoutes);


module.exports = router
