const soma = (v1,v2) => v1 + v2

const subtracao = (v1,v2) => v1 - v2

const multiplicacao = (v1,v2) => v1 * v2

const divisao = (v1,v2) => (v1 / v2).toFixed(4)

console.log(soma(365.5, 7))
console.log(subtracao(365.5, 7))
console.log(multiplicacao(365.5, 7))
console.log(divisao(365.5, 7))

const conta = (v1, v2, opr) => {
    v1 = parseFloat(v1)
    v2 = parseFloat(v2)
    if (opr == '+') {
        soma(v1, v2)
        
    } else if (opr == '-') {
        subtracao(v1, v2)
        
    } else if (opr == '/'){
        divisao(v1, v2)
        
    } else if (opr == '*'){
        multiplicacao(v1, v2)
        
    }
}

const prompt = require('prompt-sync')()

const nr1 = prompt('Digite um número: ')
const nr2 = prompt('Digite outro número: ')
const opr = prompt('Digite um Operador: ')

conta(nr1, nr2, opr)
