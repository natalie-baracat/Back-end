const prompt = require('prompt-sync')()

let idade = prompt('Quantos anos você tem?')
idade = parseInt(idade) //convertendo

if (idade < 12 || idade > 60 ) {
    console.log('Você tem direito à meia entrada');
} else {
    console.log('Você paga a entrada inteira.');
}

//usando operador ternario:
