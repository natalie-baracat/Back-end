const express = require('express')
const app = express()

//lista de usuários
const alunos = ['Shmebullock', 'Makenzie', 'Natalie', 'Mason']

//rota GET raiz (principal)
// "/" = diretorio principal | sim, eu posso colocar esta arrow function diretamente aqui, pois é umafunça que so vou usar agora e nunca mais        
app.get('/', (req, res) => {  //obs: esse "app" nao tem NADA a ver com o nome do meu arquivo
    res.send('Bem-vindo ao servidor Node.JS!')
})

// ----- funçao arrow -----
// const pgPrincipal = function (req, res) {
    //     res.send('Bem-vindo ao servidor Node.JS!')
    // }

const porta = 3000 //porta onde o servidor está rodando. a 3000 é a padrao do node
app.listen(porta, () => { //arrow function
    console.log(`Servidor rodando em http://localhost:${porta}`);
})

//criando uma nova rota "sobre"
app.get('/sobre', (req, res) => { 
    res.send('Esta é a página sobre o projeto')
})

//criando uma nova rota "contato"
app.get('/contato', (req, res) => { 
    res.send('Aqui você pode entrar em contato com a equipe :3')
})

//criando uma nova rota "alunos"
app.get('/alunos', (req, res) => {
    //estilizando um pouco
    let html = '<ul>' 
    for(let alunoSel of alunos) { //o "of" é como o "in" do python
        html = html + `<li>${alunoSel}</li>`
    }
    html = html + '</ul>' 
    res.send(html)
})

//criando uma nova rota "aluno" | os ":" representam um PARAMETRO
app.get('/aluno/:id', (req, res) => {
    const id = req.params.id
    const alunoSel = alunos[id]
    if (alunoSel == undefined) {
        res.send(`Aluno na posição ${id} não encontrado.`)
    } else {
        res.send(`Você está visualizando o perfil de ${alunoSel}.`)
    }
})

//criando uma nova rota "media", onde req possui mais de um parametro
app.get('/media/:id/:nota1/:nota2', (req, res) => {
    const id = req.params.id
    const nota1 = req.params.nota1
    const nota2 = req.params.nota2

    const alunoSel = alunos[id]
    const media = (parseFloat(nota1) + parseFloat(nota2)) / 2
    res.send(`O aluno ${alunoSel} tirou as notas ${nota1} e ${nota2}. Sua média final foi de ${media.toFixed(1)}`)
})

//criando um rota menu
app.get('/menu', (req, res) => {
    //jeito mais fácil de usar o html
    let html = `
        <h1>Menu</h1>
        <a href="/">Home</a><br>
        <a href="/sobre">Sobre</a><br>
        {<a href="/contato">Contato</a><br>}
        <a href="/alunos">Alunos</a><br>
        <a href="/aluno/2">Aluno 2</a><br>
        <a href="/aluno/666">Aluno Inválido</a><br>
        <a href="/media/1/6/9.75">Média</a><br>
    `
    res.send(html)
})