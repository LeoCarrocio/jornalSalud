const S = require('sequelize');
const db = require('../db-config');

const Usuario = db.define('cliente',{
  nombre:{
    type: S.STRING,
    allowNull: false
  },
  mail:{
    type: S.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  fecha_alta:{
    type: S.DATE,
  },
  status: {
    type: S.BOOLEAN,
  }
});

module.exports = Usuario;