// let cliente = 'Lívia'
// console.log(`Seja bem-vindo(a) ${cliente}`);
// cliente = 'Arthur'
// console.log(`Seja bem-vindo(a) ${cliente}`);
// cliente = 'Gabriel'
// console.log(`Seja bem-vindo(a) ${cliente}`);
// cliente = 'Mariana'

//vamos transformar isso de cima em uma funçao!!

function saudacoes(cliente) {
    console.log(`Seja bem vindo, ${cliente}!`);
}

saudacoes('Lívia')
saudacoes('Arthur')
saudacoes('Gabriel')
saudacoes('Mariana')

/************************************/

function soma(v1,v2){
    let res = v1 + v2
    console.log(res);
}

soma(7, 9.5)
soma('7', '9.5')