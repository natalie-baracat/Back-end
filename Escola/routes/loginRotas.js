const express = require('express')
const router = express.Router()
const BD = require('../db')

//definindo rota de login
router.get('/login', (req, res) => {
    res.render('admin/login')
})

// processando o login do usuario
router.post('/login', async (req, res) => {
    const usuario = req.body.usuario //mesma coisa de "const {usuario} = req.body"
    const senha = req.body.senha
    const buscaDados = await BD.query(`
        SELECT * FROM usuarios WHERE usuario = $1 AND senha = $2`, [usuario, senha]
    )
    //verificando de usuario e senha existem na tabela do BD, ou seja, se sao validos
    if (buscaDados.rows.length> 0 ) {
        res.redirect('/admin/')
    } else {
        res.render('admin/login', {mensagem: 'Usuário não autenticado'})
    }
})

module.exports = router