const variavelGlobal = 'Sou global'

function minhaFuncao() {
    const variavelLocal = 'Sou local'
    console.log(variavelGlobal)
    console.log(variavelLocal)
}

minhaFuncao()

console.log(variavelGlobal)
console.log(variavelLocal)
            /*erro: variavelLocal nao esta definida pois 
            sua declaracao é dentro de uma funçao */

