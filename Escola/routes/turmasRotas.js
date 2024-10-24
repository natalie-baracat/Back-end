const express = require('express')
const router = express.Router()
const BD = require('../db')

// //listar turmas (R - read)
// router.get('/', async (req, res) => {
//     const buscaDados = await BD.query('SELECT * FROM turmas_escola')
//     res.render('turmasTelas/lista', {turmas_escola: buscaDados.rows})
// })

//esses ai embaixo eu fiz sozinha :P

//rota onde lista turmas (R - read)
router.get('/', async (req, res) => { //para acessar essa rota, digito /turmas_escola/
    //visualizando erro (se tiver)
    try {
        const busca = req.query.busca || ''
        const ordenar = req.query.ordenar || 'nome_disciplina'
        const buscaDados = await BD.query(`
            SELECT * 
                FROM turmas_escola AS t
                    WHERE upper(t.nome) like $1
                ORDER BY nome ASC`, [`%${busca.toUpperCase()}%`]
            )
        res.render('turmasTelas/lista', {
            turmas_escola: buscaDados.rows,
            busca: busca,
            ordenar: ordenar
        })
    } catch (erro) {
        console.log('Erro ao listar turmas_escola', erro)
        res.render('turmasTelas/lista', {mensagem: erro})
    }
})

//rota pra abrir tela para criar uma nova turma (C - create)
router.get('/novo', (req, res) => { //para acessar essa rota, digito /turma/novo
    res.render('turmasTelas/criar')
})

router.post('/novo', async (req, res) => {
    const {nome} = req.body //oq for enviado nos inputs será armazenado nessa variavel
    await BD.query(`INSERT INTO turmas_escola(nome) 
                        VALUES ($1)`, [nome])
                        //^parametro //^nome da variavel. em cima é o campos do banco de dados
    
    res.redirect('/turmas_escola')
})

//rota para excluir uma turma (D - delete)
router.post('/:id/deletar', async (req, res) => { //para acessar digito turma/id/deletar
    const {id} = req.params
    await BD.query('DELETE FROM turmas_escola WHERE id_turma = $1', [id])
    res.redirect('/turmas_escola')
}) 

//editar uma turma (U - update)
//para acessar essa rota digito /turmas_escola/id/editar
router.get('/:id/editar', async (req, res) => {
    const {id} = req.params
    const resultado = await BD.query('SELECT * FROM turmas_escola WHERE id_turma = $1', [id])
    res.render('turmasTelas/editar', {turma: resultado.rows[0]}) //carrega nossa pagina e a linha do bd
})

router.post('/:id/editar', async (req, res) => {
    const {id} = req.params
    const {nome} = req.body
    await BD.query('UPDATE turmas_escola SET nome = $1 WHERE id_turma = $2', [nome, id])
    res.redirect('/turmas_escola')
})


module.exports = router