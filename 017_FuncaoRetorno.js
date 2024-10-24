function calcularComissao(valorVenda, percComissao) {
    percComissao = percComissao / 100
    const comissaoTotal = valorVenda * percComissao
    return comissaoTotal
    //duvida: e se eu mandasse ele printar depois do return?
    console.log(comissaoTotal); //resposta: tudp que vem apos o return NAO é executado. é ignorado.
}
let comissao = calcularComissao(1000, 25) // armazeno meu retorno dentro da variavel "comissao"
console.log(comissao)

comissao = calcularComissao(8500, 7) 
console.log(comissao)

comissao = calcularComissao(5900, 5.5) 
console.log(comissao.toFixed(2)) //esse tofixed faz com que apenas 2 casas decimais apareçam