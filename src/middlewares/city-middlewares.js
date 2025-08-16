const {StatusCodes} = require('http-status-codes');

const {ErrorResponse} = require('../utils/common');
const { AppError } = require('../utils');

function validateCreateRequest(req,res,next){
    console.log(req.body)
    if(!req.body.name){
        ErrorResponse.message = "Something went wrong while creating city";
        
        ErrorResponse.error = new AppError(['City name not found in request body']);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    next();
}

module.exports = {
    validateCreateRequest
}