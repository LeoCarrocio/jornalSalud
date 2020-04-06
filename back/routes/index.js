const express = require('express');
const router = express.Router();

const servicioRuta = require('./ruta-servicio/servicioRuta');
const usuarioRuta = require('./ruta-usuario/usuarioRuta');
const presupuestoRuta = require('./ruta-presupuesto/presupuestoRuta');
const clienteRuta = require('./ruta-usuario/usuarioRuta');


router.use('/servicio', servicioRuta);
router.use('/usuario', usuarioRuta);
router.use('/presupuesto', presupuestoRuta);
router.use('/cliente', clienteRuta);