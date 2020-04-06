const Sequelize = require('sequelize');

const db = new Sequelize('postgres://localhost:5432/jonal_salud',{
  logging: false
})

module.exports = db;