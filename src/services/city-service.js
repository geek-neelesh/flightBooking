const {CityRepository} = require('../repositories');
const  { StatusCodes } = require('http-status-codes');
const AppError = require('../utils/errors/app-error');
const cityRepository = new CityRepository();

async function createCity(data){
    try{
        const city = await cityRepository.create(data);
        return city;
    }catch(error){
        console.log(error)
        if(error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError'){
            let explanation = [];
            error.errors.forEach(err=>{
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }

        throw new AppError('Cannot create a new city object', StatusCodes.INTERNAL_SERVER_ERROR);
    }

}

async function getCities(){
    try{
        const city = await cityRepository.getAll();
        return city;
    }catch(error){
        throw new AppError('Cannot fetch data of all the cities',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function getCity(id){
    try{
        const airplane = await cityRepository.get(id);
        return airplane;
    }catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The city you requested is not present',error.statusCode);
        }
        throw new AppError('Cannot fetch data of city',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyCity(id){
    try{
        const city = await cityRepository.destroy(id);
        return city;
    }catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The city you requested to delete is not present',error.statusCode);
        }
        throw new AppError('failed to delete city data',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updatecity(id,data){
    try{
        const city = await cityRepository.update(id,data);
        return city;
    }catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The city you requested to update is not present',error.statusCode);
        }
        throw new AppError('Cannot update data of city',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createCity,
    getCities,
    getCity,
    destroyCity,
    updatecity
}