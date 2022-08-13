require("dotenv").config();
const { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD } = process.env;

export const development = {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: 'postgres',
};
export const test = {
    username: DB_USER || 'todos',
    password: DB_PASSWORD || 'todos',
    database: DB_NAME || 'todos',
    host: DB_HOST,
    dialect: 'postgres',
};
export const production = {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: 'postgres',
};
