let contador = 0

do {
    console.log(contador)
    contador++ 
} while (contador < 5)
console.log('FIM');

//printa pelo menos uma vez antes de verificar, diferentemente do "while"
contador = 5
do {
    console.log(contador)
    contador++ 
} while (contador < 5)
console.log('FIM');