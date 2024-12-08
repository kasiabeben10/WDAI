const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./ordersdb_config.js');

const Orders = sequelize.define("Orders", {
    book_id: { type: DataTypes.INTEGER, allowNull: false},
    user_id: { type: DataTypes.INTEGER, allowNull: false },
    quantity: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1}
})

module.exports = Orders;