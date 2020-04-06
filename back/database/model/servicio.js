const S = require('sequelize');
const db = require('../db-config');

const Servicio = db.define('cliente',{
  nombre:{
    type: S.STRING,
    allowNull: false
  },
  descripcion:{
    type: S.TEXT,
  },
  fecha_alta:{
    type: S.DATE,
  },
  status: {
    type: S.BOOLEAN,
  }
});

module.exports = Servicio;