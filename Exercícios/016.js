//anonima
const pi = require('./011_Module') //buscando minha funçao no arquivo 001_Module.js

const raioPorCirc = function (circunferencia) {
    let raio = (circunferencia / (2 * pi))
    console.log(raio);
}

raioPorCirc(37)

//arrow
const pi = require('./011_Module') //buscando minha funçao no arquivo 001_Module.js

const raioPorCircArrow = function (circunferencia) {
    let raio = (circunferencia / (2 * pi))
    console.log(raio);
}

raioPorCircArrow(37)