const express = require('express')
const router = express.Router()
const BD = require('../db')

//rota do painel admin
router.get('/', async (req, res) => {
    const queryTotAlunos = await BD.query(`SELECT COUNT(*) AS total_alunos FROM alunos`)
    const queryTotDisc = await BD.query(`SELECT COUNT(*) AS total_disciplinas FROM disciplinas`)
    // const queryTaxa = await BD.query(``)
    const queryTotRep = await BD.query(`SELECT COUNT(*) AS total_reprovados FROM aluno_disciplina WHERE status = 'Reprovado'`)
    const queryMediaDisc = await BD.query(`SELECT d.nome_disciplina, AVG(ad.media) AS media FROM disciplinas AS d
	                                        LEFT JOIN aluno_disciplina AS ad ON d.id_disciplina = ad.id_disciplina
	                                        GROUP BY d.nome_disciplina`)
    const queryStatusAluno =  await BD.query(`SELECT status, COUNT(*) AS total FROM aluno_disciplina GROUP BY status`)


    res.render('admin/dashboard', {
        totalAlunos : queryTotAlunos.rows[0].total_alunos,
        totalDisc : queryTotDisc.rows[0].total_disciplinas,
        //  taxa
        totalReprovacoes : queryTotRep.rows[0].total_reprovados,
        mediaDisc : queryMediaDisc.rows,
        statusAluno : queryStatusAluno.rows
    })
})

module.exports = router