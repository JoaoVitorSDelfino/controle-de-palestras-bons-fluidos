const Sequelize = require('sequelize')
const db = require('../db/connection')

const User = db.define('user', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
    },
    login: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    funcao: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})

module.exports = User