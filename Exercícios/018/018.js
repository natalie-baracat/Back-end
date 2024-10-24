const express = require('express')
const app = express()


const porta = 3000 //porta onde o servidor está rodando. a 3000 é a padrao do node
app.listen(porta, () => { //arrow function
    console.log(`Servidor rodando em http://localhost:${porta}`);
})

app.get('/', (req, res) => {
    res.send('Seja bem vindo(a)!')
})

const listaProdutos = ['Notebook', 'Mouse', 'Processador', 'Teclado', 'Memória']
app.get('/produtos', (req, res) => {
    let html = '<ul>'
    for(let produto of listaProdutos) { //o "of" é como o "in" do python
        html += `<li>${produto}</li>`
    }
    html += '<ul>'
    res.send(html)
})

app.get('/produto/:id', (req, res) => {
    const id = req.params.id
    const produto = listaProdutos[id]
    if (produto == undefined) {
        res.send('Id de produto inválido!');
    } else {
        res.send(`Informações sobre o ${produto}: Blablablablabla`)
    }
})

app.get('/total/:id_produto/:preco/:qtde', (req, res) => {
    const id_produto = req.params.id_produto
    const preco = (req.params.preco)
    const qtde = req.params.qtde

    const produto = listaProdutos[id_produto]
    let precoTotal = (qtde * parseFloat(preco))
    res.send(`
        Preço do ${produto}: R$${parseFloat(preco).toFixed(2)}
        <br>Quantidade: ${qtde}
        <hr>
        <br>Preço total: R$${precoTotal.toFixed(2)}`)
})

app.get('/menu', (req, res) => {
    let html = `
        <h1>Menu</h1>
        <a href="/">Home</a><br>
        <a href="/produtos">Produtos</a><br>
        <a href="/produto/0">Notebook</a><br>
        <a href="/total/0/4000/3">Total de sua compra</a><br>
    `
    res.send(html)
})

