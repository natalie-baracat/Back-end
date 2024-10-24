const express = require('express')
const path = require('path')

const app = express()

//Configurações do Servidor
app.set('views', path.join(__dirname, 'views')); // Configura o diretório das views
app.set('view engine', 'ejs')  //Configura o motor de templates para EJS
app.use(express.static(path.join(__dirname, 'public'))); //Define pasta para arquivos css / img
app.use(express.urlencoded({ extended: true })) //Para processar os dados do formulário
app.use(express.json());  // utilizar dados em formato JSON

//rota da pagina principal, nossa landing page
app.get('/', (req, res) => {
    //  views/landing/index.ejs
    res.render('landing/index')
}) 

/*para o codigo nao ficar bagunçado, colocamos as demais rotas em arquivos separados dentro da pasta routes*/

//utilizando rotas admin
const adminRotas = require('./routes/admin')
app.use('/admin', adminRotas)

//utilizando rotas professores
const professoresRotas = require('./routes/professoresRotas')
app.use('/professores', professoresRotas)

//utilizando rotas turmas
const turmasRotas = require('./routes/turmasRotas')
app.use('/turmas_escola', turmasRotas)
        //esse "/turmas_escolas" é apenas o endereço que digito na minha barra de pesuisa. não precisava ser o mesmo nome da minha tabela no banco de dados

//utilizando rotas disciplinas
const disciplinasRotas = require('./routes/disciplinasRotas')
app.use('/disciplinas', disciplinasRotas)

//utilizando rotas alunos
const alunosRotas = require('./routes/alunosRotas')
app.use('/alunos', alunosRotas)

//servidor
const porta = 3000
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`)
})