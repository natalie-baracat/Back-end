// arrow function para calcular j simples
const juros_simples = (c, i, t) => {
    const juros = c * (i/100) * t
    const total = juros + c
    return { //retornando um objeto
        juros: juros,
        valorTotal: total,
        c: c,
        i: i,
        t: t
    } 
}
// arrow function para calcular j composto
const juros_composto = (c, i, t) => {
    const montante = (c * ((i/100) + 1) ** t).toFixed(2)
    return { //retornando um objeto
        valorTotal: montante,
        juros: (montante - c).toFixed(2),
        c: c,
        i: i,
        t: t
    } 
}

module.exports = {juros_simples, juros_composto}
