require("dotenv").config();

const db_name = process.env.DB_NAME;
const username = process.env.DB_USER;
const password = process.env.PASSWORD;

module.exports = { db_name, username, password };
