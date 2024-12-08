const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./usersdb_config.js')

const Users = sequelize.define("Users", {
    email: {type: DataTypes.STRING, allowNull: false, unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {type: DataTypes.STRING, allowNull: false}
})

module.exports = Users