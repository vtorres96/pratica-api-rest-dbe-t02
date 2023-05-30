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

const cadastrar = (req, res) => {
    let { descricao, quantidade_estoque, valor, categoria_id } = req.body

    if (!descricao) {
        res.send('Informe a descrição do produto')
    }

    if (!quantidade_estoque) {
        res.send('Informe a quantidade do produto em estoque')
    }

    if (!valor) {
        res.send('Informe o valor do produto')
    }

    if (!categoria_id) {
        res.send('Informe a categoria do produto')
    }

    let categoriaFiltrada = categorias.find((categoria) => {
        return Number(categoria.id) === Number(categoria_id)
    })

    if (!categoriaFiltrada) {
        res.send('Não existe categoria para o ID informado')
    }

    produtos.push(req.body)

    res.send(produtos)
}


module.exports = {
    cadastrar,
}