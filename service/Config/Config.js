const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "mysql", 
  host: "localhost",
  username: "root",
  password: "abish601604",
  database: "demo",
});

module.exports = sequelize;

