const S = require('sequelize');
const db = require('../db-config');

const Presupuesto = db.define('cliente',{
  fecha_emicion:{
    type: S.DATE,
  },
  fecha_aprovacion:{
    type: S.DATE,
  },
  fecha_solicitud:{
    type: S.DATE,
  },
  fecha_alta:{
    type: S.DATE,
  },
  status: {
    type: S.BOOLEAN,
  }
});

module.exports = Presupuesto;