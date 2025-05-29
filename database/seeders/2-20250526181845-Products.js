'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'products', [
      {
        id: 1,
        name: 'remera',
        description: 'Remera blanca',
        price: '5',
        category_id: 2,
        image: 'remera-blanca.jpeg'
      },
      {
        id: 2,
        name: 'pantalon',
        description: 'Pantanlon negro',
        price: '10',
        category_id: 2,
        image: 'pantalon-negro.jpeg'
      },
      {
        id: 3,
        name: 'camisa',
        description: 'Camisa blanca',
        price: '7',
        category_id: 4,
        image: 'camisa-blanca.jpeg'
      },
      {
        id: 4,
        name: 'saco',
        description: 'Saco de vestir',
        price: '15',
        category_id: 2,
        image: 'saco-negro.jpeg'
      },

    ], {});
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('products', null, {});
     
  }
};
