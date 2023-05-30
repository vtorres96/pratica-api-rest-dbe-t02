const index = (req, res) => {
    res.send('Ola Mundo')
}

// Query Params
// Lembretes
// 1 - Vale ressaltar que um parâmetro do tipo `query` sempre vem após '?'
// 2 - Importante lembrarmos que quando existe mais de um parâmetro do tipo 'wuery'
// passamos desta maneira na URL: '?categoria_id=1&valor=10', ressaltando que 
// para separar os parâmetros utilizamos um '&', conforme ilustrado acima.
// 3 - Não é passado na rota e só é passado no momento de processar/enviar a requisição,
// e, isso pode ser feito tanto por um envio de requisição de frontend para backend, ou,
// nós mesmos que iremos passar quando estivermos aplicando testes no Postman / Insomnia
// 4 - É obtido no código através da requisição (request), desta maneira: `req.query`

// Dicas
// 1 - verificar se existe categoria para o id informado, 
//     caso não exista retornaremos uma mensagem
//     'Não existe categoria para o ID informado'
// 2 - caso exista categoria e não tenha produtos vinculados retornaremos uma mensagem
//     'Não existem produtos vinculados ao ID informado'
// 3 - caso exista categoria e tenha produto vinculado, retornaremos os produtos
let categorias = [
    {
        "id": 1,
        "descricao": "Moda"
    },
    {
        "id": 2,
        "descricao": "Games"
    },
    {
        "id": 3,
        "descricao": "Celulares"
    },
    {
        "id": 4,
        "descricao": "Beleza"
    }
]

let produtos = [
    {
        "id": 1,
        "descricao": "sapato calvin klein",
        "quantidade_estoque": 10,
        "valor": 1000,
        "categoria_id": 1,
    },
    {
        "id": 2,
        "descricao": "batom azul boca rosa",
        "quantidade_estoque": 10,
        "valor": 30,
        "categoria_id": 4
    },
    {
        "id": 3,
        "descricao": "batom roxo boca rosa",
        "quantidade_estoque": 10,
        "valor": 30,
        "categoria_id": 4
    }
]

const query = (req, res) => {
    let categoriaId = req.query.categoria_id
    let categoriaFiltrada = categorias.find((categoria) => {
        return Number(categoria.id) === Number(categoriaId)
    })

    if (!categoriaFiltrada) {
        res.send('Não existe categoria para o ID informado')
    }

    let produtosFiltrados = produtos.filter((produto) => {
        return Number(produto.categoria_id) === Number(categoriaId)
    })
    
    if (produtosFiltrados.length == 0) {
        res.send('Não existem produtos vinculados ao ID informado')
    }

    res.send(produtosFiltrados)
}

// Params
// 1 - é informado diretamente na rota
// 2 - É obtido no código através da requisição (request), desta maneira: `req.params`
// 3 - Vale ressltar que o "nome" que aplicamos para nosso parâmetro de rota,
//     é a forma que devemos obtê-lo para trabalharmos no código

// Desafio
// 1 - Receber um número através de parâmetro de rota e somá-lo com 10
const params = (req, res) => {
    let numero = req.params.numero
    let resultado = Number(numero) + 10
    res.send(`${numero} + 10 = ${resultado}`)
}

// Parâmetro de rota opcional
// 1 - se receber somente primeiro parâmetro iremos somá-lo com 10
// 1 - se receber os dois parâmetros iremos efetuar a soma entre os parâmetros
const paramsDesafio = (req, res) => {
    let numero = req.params.numero
    let numero2 = req.params.numero2
    let resultado = 0

    if (numero2) {
        resultado = Number(numero) + Number(numero2)
    } else {
        resultado = Number(numero) + 10
    }

    res.send(`O resultaod é: ${resultado}`)
}

module.exports = {
    index,
    query,
    params,
    paramsDesafio
}