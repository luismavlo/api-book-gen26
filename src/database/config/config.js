require('dotenv').config();

module.exports = {
  development: {
    username: 'postgres',
    password: 'root',
    database: 'bookdb',
    host: '127.0.0.1',
    dialect: 'postgres',
    port: 5434,
    logging: false,
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};
