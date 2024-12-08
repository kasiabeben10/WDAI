const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "orders.sqlite",
  logging: false,
});

module.exports = sequelize;