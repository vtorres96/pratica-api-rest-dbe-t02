const { Router } = require('express')
const controlador = require('./controladores/controlador')
const produtoControlador = require('./controladores/produto')

const rotas = Router()

rotas.get('/', controlador.index)

rotas.get('/query', controlador.query)

rotas.get('/params/:numero', controlador.params)

rotas.get('/params/desafio/:numero/:numero2?', controlador.paramsDesafio)

rotas.post('/produto', produtoControlador.cadastrar)

module.exports = rotas