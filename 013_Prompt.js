const prompt = require('prompt-sync')()

let nome = prompt('Qual seu nome?')
console.log(`Seja bem vinde, ${nome}!`)

//obs: o prompt sempre retona string, mas podemos converter
let anoNasc = prompt('Em que ano você nasceu?')
anoNasc = parseInt(anoNasc) //convertendo
let idade = 2024 - anoNasc
console.log(`Você tem ${idade} anos, ${nome}!`);