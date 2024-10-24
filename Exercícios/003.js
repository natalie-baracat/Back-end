const prompt = require('prompt-sync')()

let n = parseInt(prompt('Insira um número para ser somado: '))
let soma = 0

while (n > 0) {   
    soma = soma + n
    n = parseInt(prompt('Insira outro número para ser somado: '))
    
}
console.log(soma)