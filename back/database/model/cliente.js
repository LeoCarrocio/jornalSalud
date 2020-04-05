const S = require('sequelize');
const db = require('../db-config');

const Cliente = db.define('cliente',{
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
  permite_orden_de_compra:{
    type: S.BOOLEAN,
  },
  fecha_alta:{
    type: S.DATE,
  },
  status: {
    type: S.BOOLEAN,
  }
});

module.exports = Cliente;

