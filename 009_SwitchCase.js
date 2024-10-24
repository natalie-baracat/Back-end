const diaSemana = 'terça'

switch(diaSemana) {
    case 'segunda': 
    case 'terça': 
    case 'quarta':
        console.log('hoje tem aula do SESI')
        break
    case 'quinta':
        console.log('hoje tem aula do SENAI xD yippie')
        break
    case 'sexta':
        console.log('hoje tem aula do SENAI \nSEXTOU')
        break
    case 'sabado':
        console.log('GRAÇAS A DEUS FIM DE SEMANA')
        break
    case 'domingo':
        console.log('domingo a noite... hahahahahahahaha')
        break
    default: //se nao entrar em nenhuma das condiçoes
        console.log('dia inválido ⚠️ ');
}