'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameColumn('authors', 'estatus', 'status');
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.renameColumn('authors', 'status', 'estatus');
  },
};
