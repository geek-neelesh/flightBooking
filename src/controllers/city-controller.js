const {StatusCodes} = require('http-status-codes');
const {CityService} = require('../services');
const {SuccessResponse , ErrorResponse} = require('../utils/common');

/** 
* POST: /cities
* req.body {name: 'bangalore'}
**/
async function createCity(req,res){
    try{
        const airplane = await CityService.createCity({
            name: req.body.name,
        })
        SuccessResponse.data = airplane;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse)


    }catch(error){
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);

    }

}

/** 
* GET: /airplanes/
* req.body {}
**/
// async function getAirplanes(req,res){
//     try{
//         const airplanes = await AirplaneService.getAirplanes();
//         SuccessResponse.data = airplanes;
//         return res
//                 .status(StatusCodes.OK)
//                 .json(SuccessResponse)

//     }catch(error){
//         ErrorResponse.error = error;
//         return res
//                 .status(error.statusCode)
//                 .json(ErrorResponse);

//     }
// }

// /** 
// * GET: /airplane/:id
// * req.body {}
// **/
// async function getAirplane(req,res){
//     try{
//         const airplanes = await AirplaneService.getAirplane(req.params.id);
//         SuccessResponse.data = airplanes;
//         return res
//                 .status(StatusCodes.OK)
//                 .json(SuccessResponse)

//     }catch(error){
//         ErrorResponse.error = error;
//         return res
//                 .status(error.statusCode)
//                 .json(ErrorResponse);

//     }
// }

// /** 
// * DELETE: /airplane/:id
// * req.body {}
// **/
// async function destroyAirplane(req,res){
//     try{
//         const airplanes = await AirplaneService.destroyAirplane(req.params.id);
//         SuccessResponse.data = airplanes;
//         return res
//                 .status(StatusCodes.OK)
//                 .json(SuccessResponse)

//     }catch(error){
//         ErrorResponse.error = error;
//         return res
//                 .status(error.statusCode)
//                 .json(ErrorResponse);

//     }
// }

// /** 
// * PATCH: /airplane/:id
// * req.body {capacity:800}
// **/
// async function updateAirplane(req,res){
//     try{
//         const airplanes = await AirplaneService.updateAirplane(req.params.id,req.body);
//         SuccessResponse.data = airplanes;
//         return res
//                 .status(StatusCodes.OK)
//                 .json(SuccessResponse)

//     }catch(error){
//         ErrorResponse.error = error;
//         return res
//                 .status(error.statusCode)
//                 .json(ErrorResponse);

//     }
// }

module.exports = {
    createCity,
    // getAirplanes,
    // getAirplane,
    // destroyAirplane,
    // updateAirplane
}