'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('Stays', [
      {
        TravelerId: 16,
        CityId: 18,
        arrival: new Date(2018, 11, 24),
        departure: new Date(2019, 1, 4),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        TravelerId: 16,
        CityId: 16,
        arrival: new Date(2019, 1, 4),
        departure: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        TravelerId: 17,
        CityId: 16,
        arrival: new Date(2018, 12, 5),
        departure: new Date(2018, 12, 17),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        TravelerId: 17,
        CityId: 17,
        arrival: new Date(2018, 12, 17),
        departure: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        TravelerId: 18,
        CityId: 17,
        arrival: new Date(2018, 12, 16),
        departure: new Date(2019, 1, 6),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        TravelerId: 18,
        CityId: 18,
        arrival: new Date(2019, 1, 6),
        departure: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   
    return queryInterface.bulkDelete("Stays", null, {});
  }
};