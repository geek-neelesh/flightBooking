const express = require('express');
const router = express.Router();
const {AirplaneController} = require('../../controllers');

console.log("inside airplane routes");
router.post('/',AirplaneController.createAirplane);

module.exports = router;