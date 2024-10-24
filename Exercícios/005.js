const prompt = require('prompt-sync')()

console.log('------------------------')
console.log('SELECIONE O MODO DE JOGO')
console.log('------------------------')
modo = prompt('[1] Fácil [2] Médio [3] Difícil [4] Muito Difícil [5] Insano ')

switch (modo) {
    case '1':
        console.log('Modo escolhido: Fácil');
        break;
    case '2':
        console.log('Modo escolhido: Médio');
        break;
    case '3':
        console.log('Modo escolhido: Difícil');
        break;
    case '4':
        console.log('Modo escolhido: Muito Difícil');
        break;
    case '5':
        console.log('Modo escolhido: Muito Difícil');
        break;
    default:
        console.log('Modo de jogo não existe');
        break;
}