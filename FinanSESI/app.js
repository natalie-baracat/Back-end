//IMPORTANDO AS BIBLIOTECAS
const express = require('express')
const ejs = require('ejs')
const expressLayouts = require('express-ejs-layouts')

const app = express()

//CONFIGURAÇOES
app.set('view engine', 'ejs') //configura o motor de templates para ejs
app.use(express.static('public')) //configura a pasta para arquivos estaticos
app.use(expressLayouts) //define que iremos utilizar um layout padrao
app.set('layout', 'layouts/principal') //mostra onde esta meu layout padrao
app.use(express.urlencoded({extended: true})) //para processar os dados do formulario configuramos isso

//ROTAS
app.get('/', (req, res) => { //rota principal do site
    res.render('index') //renderiza o arquivo .ejs
})

app.get('/sobre', (req, res) => {
    res.render('sobre')
})

//juro simples
app.get('/juros-simples', (req, res) => {
    res.render('juros-simples')
})

app.post('/juros-simples', (req, res) => { //processa as info do juro simples para realizar os calculos
    const c = parseFloat(req.body.capital) //requisitando o campo capital
    const i = parseFloat(req.body.taxa)
    const t = parseFloat(req.body.tempo)

    const j = c * (i/100)* t
    const montante = c + j
                                //objeto
    res.render('juros-simples', {c, i, t, j, montante,})
})

//juro composto
app.get('/juros-composto', (req, res) => {
    res.render('juros-composto')
})

app.post('/juros-composto', (req, res) => { //processa as info do juro composto para realizar os calculos
    const c = parseFloat(req.body.capital) //requisitando o campo capital
    const i = parseFloat(req.body.taxa)
    const t = parseFloat(req.body.tempo)

    const montante = c*(1 + (i/100))**t
    const j = montante - c
                                 //objeto
    res.render('juros-composto', {c, i, t, j, montante,})
})

//SERVIDOR
const porta = 3000 //porta onde o servidor está rodando. a 3000 é a padrao do node
app.listen(porta, () => { //arrow function
    console.log(`Servidor rodando em http://localhost:${porta}`);
})
