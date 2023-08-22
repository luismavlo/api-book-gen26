'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      books.belongsTo(models.author, { foreignKey: 'authorId' });
    }
  }
  books.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },
      synopsis: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      numberPages: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'number_pages',
      },
      editorial: {
        type: DataTypes.STRING(80),
        allowNull: false,
      },
      publicationDate: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'publication_date',
      },
      score: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      isbn: {
        type: DataTypes.STRING(13),
        allowNull: false,
      },
      authorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'author_id',
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      sequelize,
      modelName: 'books',
    }
  );
  return books;
};
