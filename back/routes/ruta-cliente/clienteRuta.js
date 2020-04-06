const express = require('express');
const router = express.Router();

const Cliente = require('../../database/model/cliente');


router.post('/crear',(req, res)=>{
  Cliente.create(req.body.cliente)
    .then(data => res.status(201).send(data));
})

router.get('/clientes',(req, res)=>{
  Cliente.findAll()
    .then(data => res.json(data));
})