//Atividade 7 

let numero1 = parseInt (prompt("Digite um numero."));
let numero2 = parseInt (prompt("Digite outro numero."));

function mensagem(parNumero1, parNumero2){
    if (parNumero1 > parNumero2){
        return parNumero1
    }
    else{
        return parNumero2
    }
}

let maior = mensagem(numero1, numero2);
alert(`O maior número é: ${maior}`);