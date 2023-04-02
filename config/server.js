const express = require('express');
const app = express();
const port = 3000;
const sesiRoute = require('../app/routes/sesiRoutes.js');
const cors = require('cors');
const globals = require('./globals.js');
const { Sequelize } = require('sequelize'); 

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sequelize = new Sequelize(globals.db_name, globals.username, globals.password, {
    host: 'localhost',
    dialect: 'postgres' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

app.use('/sesi', sesiRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
