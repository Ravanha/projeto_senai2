//Atividade 8

let numero = parseInt(prompt("Digite um numero."));

function mensagemNumero (parnumero){
    return  parnumero * 2
}

let total = mensagemNumero(numero);

alert (`A multiplicação desse numero por ele mesmo é ${total}`);