const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./booksdb_config.js');

const Books = sequelize.define("Books", {
    title: { type: DataTypes.STRING, allowNull: false},
    author:  { type: DataTypes.STRING, allowNull: false},
    year: { type: DataTypes.INTEGER, allowNull: false},
})

module.exports = Books;