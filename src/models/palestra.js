const Sequelize = require('sequelize')
const db = require('../db/connection')
const Organizador = require('./organizador')

const Palestra = db.define('palestra', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false, 
        primaryKey: true,
        unique: true, 
        autoIncrement: true,
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    descricao: {
        type: Sequelize.STRING,
    },
    data: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    local: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})

Palestra.hasMany(Organizador, { foreignKey: 'idPalestra' })

module.exports = Palestra