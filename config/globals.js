require("dotenv").config();

const db_name = process.env.DB_NAME;
const username = process.env.DB_USER;
const password = process.env.PASSWORD;
const port = process.env.DB_PORT;
const host = process.env.HOST;

module.exports = { db_name, username, password, port, host };
