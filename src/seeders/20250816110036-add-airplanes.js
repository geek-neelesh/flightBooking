'use strict';
const {Op} = require("sequelize");
const { data } = require('../utils/common/error-response');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airplanes',[
      {
        modelNumber:"airbus220",
        capacity:220,
        createdAt: new Date(),
        updatedAt:new Date()
      },
      {
        modelNumber:"airbus260",
        capacity:260,
        createdAt: new Date(),
        updatedAt:new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Airplanes',{[Op.or]:[{modelNumber:"airbus220"},{modelNumber: "airbus260" }]});
  }
};
