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
* GET: /cities/
* req.body {}
**/
async function getCities(req,res){
    try{
        const city = await CityService.getCities();
        SuccessResponse.data = city;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse)

    }catch(error){
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);

    }
}

/** 
* GET: /cities/:id
* req.body {}
**/
async function getCity(req,res){
    try{
        const airplanes = await CityService.getCity(req.params.id);
        SuccessResponse.data = airplanes;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse)

    }catch(error){
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);

    }
}

/** 
* DELETE: /cities/:id
* req.body {}
**/
async function destroyCity(req,res){
    try{
        const city = await CityService.destroyCity(req.params.id);
        SuccessResponse.data = city;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse)

    }catch(error){
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);

    }
}

/** 
* PATCH: /cities/:id
* req.body {name:"Bangalore"}
**/
async function updateCity(req,res){
    try{
        const city = await CityService.updatecity(req.params.id,req.body);
        SuccessResponse.data = city;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse)

    }catch(error){
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);

    }
}

module.exports = {
    createCity,
    getCity,
    getCities,
    destroyCity,
    updateCity
}