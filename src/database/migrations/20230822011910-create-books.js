'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING(40),
        allowNull: false,
      },
      synopsis: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      numberPages: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'number_pages',
      },
      editorial: {
        type: Sequelize.STRING(80),
        allowNull: false,
      },
      publicationDate: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'publication_date',
      },
      score: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      isbn: {
        type: Sequelize.STRING(13),
        allowNull: false,
      },
      authorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'author_id',
        references: {
          model: 'authors',
          key: 'id',
        },
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('books');
  },
};
