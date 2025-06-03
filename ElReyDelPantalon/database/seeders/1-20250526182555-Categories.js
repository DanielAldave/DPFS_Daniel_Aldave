'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'categories', [
      {
        id: 1,
        name:'remeras'
      },
      {
        id: 2,
        name:'pantalones'
      },
      {
        id: 3,
        name:'camisas'
      },
      {
        id: 4,
        name:'sacos'
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
  
    await queryInterface.bulkDelete('categories', null, {});
  }
};
