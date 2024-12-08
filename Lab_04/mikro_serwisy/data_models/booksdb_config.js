const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "books.sqlite",
  logging: false,
});

module.exports = sequelize;