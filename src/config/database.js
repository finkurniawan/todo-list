require('dotenv').config();

const { DB_HOST_DATABASE, DB_NAME, DB_USER, DB_PASSWORD } = process.env;
console.log(DB_HOST_DATABASE)
module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST_DATABASE,
    dialect: 'postgres',
  },
  test: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST_DATABASE,
    dialect: 'postgres',
  },
  production: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST_DATABASE,
    dialect: 'postgres',
  },
};
