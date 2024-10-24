//OBJETOS

//criando um objeto
let produto = {
    nome: 'Iphone',
    modelo: '14',
    preco: 3999.90,
    memoria: 256
}

let aluno = {
    nome: 'Mason',
    idade: 15,
    rm: 3150
}

//acessando as chaves do objeto
//(notaçao de ponto)
console.log(produto.nome);
//(notaçao de colchetes)
console.log(produto['modelo']);

//tambem posso atribuir o conteudo do objeto à uma variável
let nomeAluno = aluno.nome

let valorProduto = produto.preco
valorProduto = valorProduto * 0.8
console.log(`Produto ${produto.nome} de R$${produto.preco} por R$${valorProduto} `); //isto nao muda o valor original!

//alterando propriedade
console.log(produto);
produto.preco = 3890.00
console.log(produto);

//adicionando nova propriedade
produto.fabricante = 'Apple'
console.log(produto);

//iterando sobre os objetos
for (let chave in produto) {
    console.log(`na chave ${chave} tem o valor ${produto[chave]}`);
}

//objetos aninhados
let funcionario = {
    nome: 'Reinaldo',
    idade: 30,
    salario: 5000.00,
    filhos: {
        filho1: 'Jorge',
        filho2: 'Reinaldo Jr'
    }
}

console.log(funcionario.filhos.filho2); //Reinaldo Jr

aluno = {
    nome: 'Marta',
    idade: 10,
    turma: {
        serie: '5º ano EF',
        ano: 2024
    },
    responsavel: {
        nome: 'Ana',
        celular: '18 9999-7777'
    },
    amigos: [
        'Mario', 'Jéssica'
    ],
    notas: [  //vetor com objeto
        {
            disciplina: 'Matemática',
            nota: 8.5
        },
        {
            disciplina: 'Português',
            nota: 9.0
        }
    ]
}
console.log(aluno.idade); //10
console.log(aluno.responsavel.nome); //ana
console.log(aluno.notas); //objeto notas
console.log(aluno.amigos); //vetor amigos
console.log(aluno.amigos[0]); //mario
console.log(aluno.notas[0].nota); //nota de matematica

/***************************/

//DESESTRUTURAÇAO DE OBJETOS

let colaborador = {
    nome: 'Mauricio',
    salario: 5000.00,
    idade: 40,
    setor: RH
}

//se fossemos atribuir dados do objeto a uma variavel do jeito comum
let nomeColaborador = colaborador.nome
let salarioColaborador = colaborador.salario
let idadeColaborador = colaborador.idade

console.log(nomeColaborador);

//utilizando a desestruturaçao de objetos
let {nome, salario, idade} = colaborador

console.log(nome);

//mostrando a diferença entre um objeto js e json

//requisitando o objeto do arquivo json
const dadosJson = require('./022_Json.json')