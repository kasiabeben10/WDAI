const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./ordersdb_config.js')
const Books = require('./booksdb.js')
const Users = require('./usersdb.js');

const Orders = sequelize.define("Order", {
    book_id: { type: DataTypes.INTEGER, allowNull: false},
    user_id: { type: DataTypes.INTEGER, allowNull: false },
    quantity: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1}

})

Orders.belongsTo(Books, { foreignKey: "book_id" })
Orders.belongsTo(Users, { foreignKey: 'user_id' })
module.exports = Orders;