const express = require('express')
const router = express.Router()
const BD = require('../db')

//rota onde lista disciplinas (R - read)
router.get('/', async (req, res) => { //para acessar essa rota, digito /disciplinas/
    //visualizando erro (se tiver)
    try {
        const busca = req.query.busca || ''
        const ordenar = req.query.ordenar || 'nome_disciplina'
        const pg = req.query.pg || 1 //obtendo a pag de dados

        const limite = 5; //numero de registros por pagina
        const offset = (pg - 1) * limite //qtd de registros de quero "pular"

        const buscaDados = await BD.query(`
            SELECT d.id_disciplina, d.nome_disciplina, p.nome_professor
                FROM disciplinas AS d
                    LEFT JOIN professores AS p ON d.id_professor = p.id_professor
                    WHERE upper(d.nome_disciplina) like $1 or upper(p.nome_professor) like $1
                ORDER BY ${ordenar}
                LIMIT $2 OFFSET $3`, [`%${busca.toUpperCase()}%`, limite, offset]
        )

        const totalItens = await BD.query(`
            SELECT COUNT(*) AS total
                FROM disciplinas AS d
                    LEFT JOIN professores AS p ON d.id_professor = p.id_professor
                    WHERE upper(d.nome_disciplina) like $1 or upper(p.nome_professor) like $1`,
                    [`%${busca.toUpperCase()}%`]
        )

        const totalPgs = Math.ceil(totalItens.rows[0].total / limite)

        res.render('disciplinasTelas/lista', {
            vetorDados: buscaDados.rows,
            busca: busca,
            ordenar: ordenar,
            pgAtual : parseInt(pg),
            totalPgs : totalPgs
        })

    } catch (erro) {
        console.log('Erro ao listar disciplinas', erro)
        res.render('disciplinasTelas/lista', {mensagem: erro})
    }
})

//rota pra abrir tela para criar uma nova disciplina (C - create)
router.get('/novo', async (req, res) => { //para acessar essa rota, digito /disciplina/novo
    try {
        const resultado =  await BD.query('SELECT * FROM professores ORDER BY nome_professor')
        res.render('disciplinasTelas/criar', {professoresCadastrados: resultado.rows})
    } catch (erro) {
        console.log('Erro ao abrir tela de cadastro de disciplinas', erro)
        res.render('disciplinasTelas/criar', {mensagem: erro})
    }
})

router.post('/novo', async (req, res) => {
    try {
        const {nome_disciplina, id_professor} = req.body
        await BD.query(`INSERT INTO disciplinas(nome_disciplina, id_professor)
                            VALUES($1, $2)`, [nome_disciplina, id_professor])
        res.redirect('/disciplinas')
    } catch (erro) {
        console.log('Erro ao cadastrar disciplinas', erro)
        res.render('disciplinasTelas/criar', {mensagem: erro})
    }
})

//rota para excluir uma disciplina (D - delete)
router.post('/:id/deletar', async (req, res) => { //para acessar digito turma/id/deletar
    const {id} = req.params
    await BD.query('DELETE FROM disciplinas WHERE id_disciplina = $1', [id])
    res.redirect('/disciplinas')
}) 

//rota para editar uma disciplina (U - update)
router.get('/:id/editar', async (req, res) => {
    try {
        const {id} = req.params
        const resultado =  await BD.query('SELECT * FROM disciplinas WHERE id_disciplina = $1', [id])
        const resultadoProf =  await BD.query('SELECT * FROM professores ORDER BY nome_professor') //lista com todos os professores cadastrados 
        res.render('disciplinasTelas/editar', {
            disciplina: resultado.rows[0],
            professoresCadastrados : resultadoProf.rows
        })
    } catch (erro) {
        console.log('Erro ao editar disciplina', erro);
    }
})

router.post('/:id/editar', async (req, res) => {
    try {
        const {id} = req.params
        const {nome_disciplina, id_professor} = req.body 
        await BD.query(`UPDATE disciplinas SET nome_disciplina = $1, id_professor = $2 WHERE id_disciplina = $3`, [nome_disciplina, id_professor, id]) 
        res.redirect('/disciplinas/')
    } catch (erro) {
        console.log('Erro ao gravar disciplina', erro);
    }
})

module.exports = router