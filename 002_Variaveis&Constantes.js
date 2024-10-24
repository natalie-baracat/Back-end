// VARIAVEIS - PODEM SER ALTERADAS
var escola
var nome = "Maria"
let idade = 30 //ambos sao declaracoes devariavel. mais pra frente vamos entender pq escolhemos o let
console.log(nome);
console.log(idade);
//FORMATANDO A EXIBIÇAO
console.log(`A ${nome} tem ${idade} anos.`); //obs: PRECISA ser com o acento GRAVE

nome = "Makenzie" //mudando os valores das variaveis
idade = 31
console.log(`A ${nome} tem ${idade} anos.`);


//CONSTANTES - NAO PODEM SER ALTERADOS
const PI = 3.1416
//se eu escrever PI = 3.14165 vai dar erro, pois PI é uma constante
