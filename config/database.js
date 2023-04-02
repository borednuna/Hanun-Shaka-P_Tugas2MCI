const globals = require('./globals.js');
const { db_name } = globals;
const { username } = globals;
const { password } = globals;

module.exports = {
  "development": {
    "username": username,
    "password": password,
    "database": db_name,
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": username,
    "password": password,
    "database": db_name,
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": username,
    "password": password,
    "database": db_name,
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
