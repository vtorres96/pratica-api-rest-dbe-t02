Elencar os passos para iniciar uma API REST (do total zero)

1º - Criar arquivo package.json através do comando `npm init -y`

2º - Instalar o express e o nodemon

3º - Criar estrutura de pasta  src/

4º - Criar arquivo que será o servidor (index.js)

5º - Fazer uma rota de teste no arquivo do servidor mesmo (index.js)
    - entender e aprofundar: req.query, req.params
    
6º - Desacoplar a lógica da rota para um arquivos de rotas (rotas.js)

7º - Desacoplar a lógica de regras de negócio do arquivo de rotas (rotas.js) para o controlador.

8º - Fazer validação de campos vazios

9º - Mover a implementação da validação do passo 8 para um intermediário.

Desafio

<summary><b>Cadastrar Produto</b></summary>

#### `POST` `/produto`

Essa rota deve permite cadastrar um novo produto, a partir do corpo de requisição (body) abaixo:
```
{
    "descricao": "Motorola g9 play",
    "quantidade_estoque": 10,
    "valor": 1000,
    "categoria_id": 1
}
```

Critérios de aceite:

    -   Validar os campos obrigatórios:
        -   descricao
        -   quantidade_estoque
        -   valor
        -   categoria_id
    -   A categoria informada na qual o produto será vinculado deverá existir.