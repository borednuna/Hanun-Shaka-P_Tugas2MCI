const express = require('express');
const app = express();
const sesiRoute = require('../app/routes/sesiRoutes.js');
const cors = require('cors');
const globals = require('./globals.js');
const { Sequelize } = require('sequelize'); 
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/sesi', sesiRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
