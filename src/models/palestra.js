const Sequelize = require('sequelize')
const db = require('../db/connection')
const Participante = require('./participante')
const Organizador = require('./organizador')

const Oficina = db.define('oficina', {
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

Oficina.hasMany(Organizador, { foreignKey: 'idOficina' })

module.exports = Oficina