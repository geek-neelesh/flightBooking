const { Logger } = require('../config');
const { AppError } = require('../utils');
const {StatusCodes} = require('http-status-codes');

class CrudRepository{
    constructor(model){
        this.model = model;
    }

    async create(data){
            console.log("inside Crud repo : create",data);
            const response = await this.model.create(data);
            return response;
    }

    async destroy(data){
        const response = await this.model.destroy({
            where: {
                id: data
            }
        });
        if(!response){
            throw new AppError('Failed to delete airplane data',StatusCodes.NOT_FOUND)
        }
        return response;
    }

    async get(data){
        const response = await this.model.findByPk(data);
        if(!response){
            throw new AppError('No data found',StatusCodes.NOT_FOUND)
        }
        return response;
    }

    async getAll(){
        const response = await this.model.findAll();            
        return response; 
    }

    async update(id,data){  
        const response = await this.model.update(data,{
            where: {
                id: id
            }
        });
        if(!response[0]){
            throw new AppError('Failed to update airplane data',StatusCodes.NOT_FOUND)

        }
        return response;
    }

}

module.exports = CrudRepository;