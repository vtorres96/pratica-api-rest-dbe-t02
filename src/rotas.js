const { Router } = require('express')
const controlador = require('./controladores/controlador')

const rotas = Router()

rotas.get('/', controlador.index)

rotas.get('/query', controlador.query)

rotas.get('/params/:numero', controlador.params)

rotas.get('/params/desafio/:numero/:numero2?', controlador.paramsDesafio)

module.exports = rotas