const {Pool} = require('pg') //fazendo conexao com o postgre

const BD = new Pool({ //BD = banco de dados
    user: 'postgres', //nome usuario (proprietario) do bando de dados
    host: 'localhost', //endereco do servidor, no nosso caso é local
    database: 'escola', //nome do banco de dados (deve estar igual ao nome no postgre)
    password: 'admin', //senha do bando de dados
    port: 5432, //porta de conexao do servidor
})

module.exports = BD