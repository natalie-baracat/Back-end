const pi = require('./011_Module') //buscando minha funçao no arquivo 001_Module.js

function raioPorCirc(circunferencia) {
    let raio = (circunferencia / (2 * pi))
    console.log(raio);
}

raioPorCirc(37)