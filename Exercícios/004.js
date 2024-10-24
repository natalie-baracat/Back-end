const prompt = require('prompt-sync')()

let somaNotas = 0
let qtdNotas = 0
let notaDigitada = 0
do {
    notaDigitada = parseFloat(prompt('Digite a nota: '))
    qtdNotas++
    somaNotas = somaNotas + notaDigitada
} while (notaDigitada != -1 )

let media = somaNotas / qtdNotas
console.log(media)