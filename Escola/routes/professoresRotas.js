const express = require('express')
const router = express.Router()
const BD = require('../db')

// //rota onde lista professores (R - read)
// router.get('/', async (req, res) => { //para acessar essa rota, digito /professores/
//     const buscaDados = await BD.query('SELECT * FROM professores')
//     res.render('professoresTelas/lista', {professores: buscaDados.rows})
// })

//rota onde lista professores (R - read)
router.get('/', async (req, res) => { //para acessar essa rota, digito /disciplinas/
    //visualizando erro (se tiver)
    try {
        const busca = req.query.busca || ''
        const ordenar = req.query.ordenar || 'nome_professor'
        const buscaDados = await BD.query(`
            SELECT *
                FROM professores AS p
                    WHERE upper(p.nome_professor) like $1
                ORDER BY ${ordenar}`, [`%${busca.toUpperCase()}%`]
            )
        res.render('professoresTelas/lista', {
            professores: buscaDados.rows,
            busca: busca,
            ordenar: ordenar
        })
    } catch (erro) {
        console.log('Erro ao listar professores', erro)
        res.render('professoresTelas/lista', {mensagem: erro})
    }
})

//rota pra abrir tela para criar um novo professor (C - create)
router.get('/novo', (req, res) => { //para acessar essa rota, digito /professores/novo
    res.render('professoresTelas/criar')
})
 
            //este nome nao precisa ser o mesmo da rota tipo GET
router.post('/novo', async (req, res) => {
    const {nome_professor, telefone, formacao} = req.body //oq for enviado nos inputs será armazenado em cada uma dessas variaveis
    // isso acima (objeto desestruturado) é a mesma coisa de:
    // const nome_professor = req.body.nome_professor
    // const telefone = req.body.telefone
    // const formacao = req.body.formacao
    await BD.query(`INSERT INTO professores (nome_professor, telefone, formacao) 
                        VALUES ($1, $2, $3)`, [nome_professor, telefone, formacao])
                                //^parametros //^nomes das variaveis. em cima sao os campos do banco de dados
    
    res.redirect('/professores')
})

//rota para excluir um professor (D - delete)
router.post('/:id/deletar', async (req, res) => { //para acessar digito professores/1/deletar
    const {id} = req.params
    await BD.query('DELETE FROM professores WHERE id_professor = $1', [id])
    res.redirect('/professores')
}) 

//editar um professor (U - update)
//para acessar essa rota digito /professores/id/editar
router.get('/:id/editar', async (req, res) => {
    const {id} = req.params
    const resultado = await BD.query('SELECT * FROM professores WHERE id_professor = $1', [id])
    res.render('professoresTelas/editar', {professoresCadastrados: resultado.rows[0]}) //carrega nossa pagina e a linha do bd
})

router.post('/:id/editar', async (req, res) => {
    const {id} = req.params
    const {nome_professor, telefone, formacao} = req.body
    await BD.query('UPDATE professores SET nome_professor = $1, telefone = $2, formacao = $3 WHERE id_professor = $4', [nome_professor, telefone, formacao, id])
    res.redirect('/professores')
})

module.exports = router