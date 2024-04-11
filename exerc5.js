// Atividade 5

let altura = prompt ("Digite a altura");
let largura = prompt ("Digite a largura");
let area;
let perimetro;
 
function areaPerimetro (alturaP, larguraP){
    area = (alturaP*larguraP);
    perimetro = (alturaP*2 + larguraP*2);
}  
areaPerimetro (altura, largura);
    alert (`A área é de ${area} e o perímetro é de ${perimetro}`);