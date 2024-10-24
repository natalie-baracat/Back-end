const express = require('express')
const router = express.Router()
const BD = require('../db')

// //rota onde lista alunos (R - read)
// router.get('/', async (req, res) => { //para acessar essa rota, digito /alunos/
//     const buscaDados = await BD.query(`
//         SELECT a.nome, a.email, t.nome FROM alunos AS a 
//             INNER JOIN turmas_escola AS t ON a.id_turma = t.id_turma
//     `)
//     res.render('alunosTelas/lista', {alunos: buscaDados.rows})
// })


//rota onde lista disciplinas (R - read)
router.get('/', async (req, res) => { //para acessar essa rota, digito /alunos/
    //visualizando erro (se tiver)
    try {
        const busca = req.query.busca || ''
        const ordenar = req.query.ordenar || 'nome'
        const buscaDados = await BD.query(`
            SELECT a.nome, a.email, t.nome FROM alunos AS a 
                    INNER JOIN turmas_escola AS t ON a.id_turma = t.id_turma
                    WHERE upper(a.nome) like $1 or upper(t.nome) like $1
                ORDER BY ${ordenar}`, [`%${busca.toUpperCase()}%`]
            )
        res.render('alunosTelas/lista', {
            vetorDados: buscaDados.rows,
            busca: busca,
            ordenar: ordenar
        })
    } catch (erro) {
        console.log('Erro ao listar alunos', erro)
        res.render('alunosTelas/lista', {mensagem: erro})
    }
})

//rota pra abrir tela para criar aluno (C - create)
router.get('/novo', async (req, res) => { //para acessar essa rota, digito /disciplina/novo
    try {
        const resultado =  await BD.query('SELECT * FROM alunos ORDER BY nome')
        res.render('alunosTelas/criar', {professoresCadastrados: resultado.rows})
    } catch (erro) {
        console.log('Erro ao abrir tela de cadastro de alunos', erro)
        res.render('alunosTelas/criar', {mensagem: erro})
    }
})

router.post('/novo', async (req, res) => {
    try {
        const {nome, email, idade, cpf} = req.body
        await BD.query(`INSERT INTO alunos(nome, email, idade, cpf)
                            VALUES($1, $2, $3, $4)`, [nome, email, idade, cpf])
        res.redirect('/alunos')
    } catch (erro) {
        console.log('Erro ao cadastrar aluno', erro)
        res.render('alunosTelas/criar', {mensagem: erro})
    }
})

//rota para excluir uma aluno (D - delete)
router.post('/:id/deletar', async (req, res) => { //para acessar digito turma/id/deletar
    const {id} = req.params
    await BD.query('DELETE FROM alunos WHERE id_aluno = $1', [id])
    res.redirect('/alunos')
}) 


module.exports = router