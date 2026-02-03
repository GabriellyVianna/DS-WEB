let capital = prompt("Digite o capital:");
let taxa = prompt("Digite a taxa:");
let tempoMeses = prompt("Digite o tempo:");

let C = parseFloat(capital);
let i = parseFloat(taxa) / 100; 
let t = parseFloat(tempoMeses);

let montante = C * ((1 + i) ** t);

alert("Resultado final: " + montante.toFixed(2));