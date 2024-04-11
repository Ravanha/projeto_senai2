// Atividade 4

let valor = parseFloat (prompt ("Digite um valor em reais para saber o quantia em dolar"));
let total;
function valorNumero (valor){
    total = valor / 4.80;
        return alert (`O valor da conversão é de ${total.toFixed(2)}`);
}
valorNumero(valor);