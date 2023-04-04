const globals = require("./globals.js");
const { db_name } = globals;
const { username } = globals;
const { password } = globals;
const { port } = globals;
const { host } = globals;

module.exports = {
  development: {
    username: username,
    password: password,
    database: db_name,
    host: host,
    dialect: "postgres",
    port: port,
  },
  test: {
    username: username,
    password: password,
    database: db_name,
    host: host,
    dialect: "postgres",
    port: port,
  },
  production: {
    username: username,
    password: password,
    database: db_name,
    host: host,
    dialect: "postgres",
    port: port,
  },
};
