// require('dotenv').config();
// const globals = require('./config/globals.js');
// const express = require('express');
// const app = express();
// const port = 3000;

// const { Sequelize } = require('sequelize');

// // Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(globals.db_name, globals.username, globals.password, {
  host: 'localhost',
  dialect: 'postgres' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

// async function test() {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// }

// test();
