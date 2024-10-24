//ARROW FUNCTIONS COM PARAMETRO

const saudacao2 = (nome) => {
    console.log(nome)
}
saudacao2('SENAI')


const soma2 = (v1,v2) => {
    console.log(v1+v2);
}

/***************************/
//ARROW FUNCTION COM 0 PARAMETRO

const bemVindo = () => {
    console.log('Bem vindo ao curso de JS! :3');
}

/***************************/
//ARROW FUNCTION COM RETURN

const multiplicacao = (v1,v2) => v1 * v2 //quando temos apenas um comando, podemos escrever 
// é a mesma coisa que:
// const multiplicacao = (v1,v2) => {
//     return v1 * v2
// }

