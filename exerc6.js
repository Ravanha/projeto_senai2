// Atividade 6

let raio = parseInt (prompt ("Digite o raio da sua sala circular"));
let area;
let perimetro;

function contaAreaPerimetro (raioP) {
    area = ((raio * raio)* 3.14)
    perimetro = 2 * 3.14 * raio
}

contaAreaPerimetro(raio)
alert(`A area da sua sala é ${area} e o perimetro é ${perimetro}`)

