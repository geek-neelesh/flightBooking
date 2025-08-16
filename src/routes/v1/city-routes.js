const express = require('express');
const router = express.Router();
const {CityController} = require('../../controllers');
const {AirplaneMiddlewares} = require('../../middlewares');

router.post('/',
    // AirplaneMiddlewares.validateCreateRequest,
    CityController.createCity
);

// router.get('/',
//     AirplaneController.getAirplanes
// );

// router.get('/:id',
//     AirplaneController.getAirplane
// );

// router.delete('/:id',
//     AirplaneController.destroyAirplane
// );

// router.patch('/:id',
//     AirplaneController.updateAirplane
// );



module.exports = router;