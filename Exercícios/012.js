function valorPI() {
    const PI = 3.1415
    return PI
}

const pi = valorPI()

function raioPorCirc(circunferencia) {
    let raio = (circunferencia / (2 * pi))
    console.log(raio);
}

raioPorCirc(37)