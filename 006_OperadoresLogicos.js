//AND
console.log((5>3)&&(10<20)); //true
console.log((5>3)&&(10>20)); //false
//exemplo mais claro:
const usuario = 'Natalie'
const senha = 123
console.log((usuario == 'Natalie') && (senha == 123)); //true
console.log((usuario == 'Natalie') && (senha == 133)); //false

//OR
console.log((usuario == 'Natalie') || (senha == 123)); //true
console.log((usuario == 'Natalie') || (senha == 133)); //true

//NOT
let aprovado = true
aprovado = !aprovado
console.log(aprovado); //false