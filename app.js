//Atividade 2
let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do Desafio."

//Atividade 3
function validarConsole(){
    console.log ("O botão foi clicado");
}

//Atividade 4
function validarAlert(){
    alert ("Eu amo o JS");
}

//Atividade 5
function validarPrompt(){
let cidade = prompt ("Digite um nome de uma cidade do Brasil");
alert (`Estive em ${cidade} e lembrei de você`);
}

//Atividade 6
function validarSoma(){
    let numero = parseInt (prompt ("Digite um numero"));
    let numero2 = parseInt (prompt ("Digite outro numero"));
    let total = numero2 + numero
    alert (`Os numeros escolhidos foram ${numero} e ${numero2} e a soma deles é ${total}`);
}
