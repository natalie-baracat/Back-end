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
        const ordenar = req.query.ordenar || 'a.nome'
        const buscaDados = await BD.query(`
            SELECT a.nome, a.email, t.nome AS turma, a.id_aluno, a.cpf FROM alunos AS a 
                    INNER JOIN turmas_escola AS t ON a.id_turma = t.id_turma
                    WHERE upper(a.nome) like $1 or upper(t.nome) like $1
                ORDER BY ${ordenar}`, [`%${busca.toUpperCase()}%`]
            )
        res.render('alunosTelas/lista', {
            alunos: buscaDados.rows,
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

//rota editar (U)
router.get('/:id/editar', async(req, res) => {
    try {
        const { id } = req.params
        const resultado = 
            await BD.query('select * from alunos where id_aluno = $1', [id])
        
        const turmasCadastradas = 
            await BD.query('select * from turmas_escola order by nome')
        
        const disciplinasCadastradas = 
            await BD.query('select * from disciplinas order by nome_disciplina')

        const notasCadastradas =
            await BD.query(`SELECT d.nome_disciplina, ad.media, ad.nr_faltas, ad.status FROM disciplinas AS d 
                                INNER JOIN aluno_disciplina AS ad ON d.id_disciplina = ad.id_disciplina WHERE ad.id_aluno = $1`, [id] )

        res.render('alunosTelas/editar', {
            aluno : resultado.rows[0],
            turmasCadastradas : turmasCadastradas.rows,
            disciplinasCadastradas : disciplinasCadastradas.rows,
            notasCadastradas : notasCadastradas.rows
        })
    } catch (erro) {
        console.log('Erro ao editar aluno', erro);
    }
})

router.post('/:id/editar', async(req, res) => {
    try {
        const { id } = req.params
        const { nome, idade, email, cpf, sexo, id_turma } = req.body
        await BD.query(`update alunos 
                set nome = $1, 
                idade = $2,
                email = $3,
                cpf = $4,
                sexo = $5,
                id_turma = $6
                where id_aluno = $7`, [nome, idade, email, cpf, sexo, id_turma, id  ])
        res.redirect('/alunos/')
    } catch (erro) {
        console.log('Erro ao gravar aluno', erro);        
    }
})

//rota para excluir uma aluno (D - delete)
router.post('/:id/deletar', async (req, res) => { //para acessar digito turma/id/deletar
    const {id} = req.params
    await BD.query('DELETE FROM alunos WHERE id_aluno = $1', [id])
    res.redirect('/alunos')
}) 

//rota para lançar nota
router.post('/:id/lancar-nota', async(req, res) => {
    try {
        const { id } = req.params
        const { media, faltas, id_disciplina } = req.body
        await BD.query(`INSERT INTO aluno_disciplina(id_disciplina, id_aluno, media, nr_faltas)
                            VALUES($1,$2,$3,$4)`, [id_disciplina, id, media, faltas]
        )

        res.redirect(`/alunos/${id}/editar`)
    } catch (erro) {
        console.log('Erro ao gravar aluno', erro);        
    }
})



module.exports = router