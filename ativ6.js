//Atividade 6

let numero1 = parseInt (prompt ("Digite um numero."));
let numero2 = parseInt (prompt ("Digite outro numero."));
let numero3 = parseInt (prompt ("Digite mais um numero."));
let total

function conta(numero1, numero2, numero3){
    return (numero1 + numero2 + numero3) / 3
}

let media = conta(numero1, numero2, numero3);

alert (`A média desses numeros é ${media}`);