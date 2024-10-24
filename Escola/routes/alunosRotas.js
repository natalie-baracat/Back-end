const express = require('express')
const router = express.Router()
const BD = require('../db')

//rota onde lista alunos (R - read)
router.get('/', async (req, res) => { //para acessar essa rota, digito /alunos/
    const buscaDados = await BD.query(`
        SELECT a.nome, a.email, t.nome FROM alunos AS a 
            INNER JOIN turmas_escola AS t ON a.id_turma = t.id_turma
    `)
    res.render('alunosTelas/lista', {alunos: buscaDados.rows})
})

module.exports = router