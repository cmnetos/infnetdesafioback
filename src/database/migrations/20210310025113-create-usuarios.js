'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     return await queryInterface.createTable('usuarios', { id: Sequelize.INTEGER });

  },

  down: async (queryInterface) => {
     return await queryInterface.dropTable('usuarios');
  }
};
