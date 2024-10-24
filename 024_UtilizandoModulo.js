const {juros_simples, juros_composto} = require('./023_ModuloJuros') //utilizando objeto

let resultado = juros_simples(1000, 5, 12)
console.log(`Capital: ${juros_simples.c}`);
console.log(`Taxa: ${juros_simples.i}`);
console.log(`Tempo: ${juros_simples.t}`);
console.log(`Juros: ${resultado.juros}`);
console.log(`Montante: ${resultado.valorTotal}`);

console.log(' ');

resultado = juros_composto(1000, 5, 12)
console.log(`Capital: ${juros_composto.c}`);
console.log(`Taxa: ${juros_composto.i}`);
console.log(`Tempo: ${juros_composto.t}`);
console.log(`Juros: ${resultado.juros}`);
console.log(`Montante: ${resultado.valorTotal}`);