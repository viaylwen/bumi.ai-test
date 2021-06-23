'use strict';
const fs = require('fs')

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   let photos = JSON.parse(fs.readFileSync('./seeders/data.json', 'utf-8'))
   photos.forEach(el => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
   })
   return queryInterface.bulkInsert("Photos", photos, {})
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete("Photos", null, {})
  }
};
