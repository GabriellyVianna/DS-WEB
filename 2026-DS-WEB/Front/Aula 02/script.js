//Funções em Javascript:

function somarNumeros(num1,num2) {
    return num1 + num2;
}

let resultado = somarNumeros(5,10)
console.log(resultado)

alert (resultado)

confirm("Esse é o resultado esperado?" + resultado)

//Trabalhando com DATA e HORA

let dataAtual = new Date()
console.log(dataAtual.toISOString())

let ano = dataAtual.getFullYear();
let mes = dataAtual.getMonth() + 1;
let dia = dataAtual.getDate();
let hora = dataAtual.getHours();
let minuto = dataAtual.getMinutes();
let segundo = dataAtual.getSeconds();

console.log(`${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`);

//===============================================================
//Outro Exemplo
let hoje = new Date();
let diasParaAdicionar = 7;

//Cria uma nova data a partir da data atual
let novaData = new Date(hoje);
novaData.setDate(novaData.getDate() + diasParaAdicionar);

//toLocalDateString Exibe a data no formato local,ou seja dia/mes/ano
console.log(novaData.toLocaleDateString());

//================================================================
let data1 = new Date('2025-03-19');
let data2 = new Date('2025-03-25');

//Difrença em milissegendos
let diferencaMs = data2 - data1;

//Convertendo para Dias
let diferencaDias = diferencaMs / (1000 * 60 * 60 * 24);
console.log(`Diferença: ${diferencaDias} dias`);
//Saída: Diferença: 6 dias

//Manipulando o  DOM
document.getElementById("conteudo").innerHTML = "<p>Olá, mundo!</p>";

var valor = document.getElementById("conteudo").innerHTML;
console.log(valor);

//Usando o setAtributte
document.getElementById("foto").setAttribute("scr","imagem.jpg");

console.log(document.getElementById("foto").getAttribute("src"));

//Alterando propriedades CSS
document.getElementById("conteudo").style.backgroundColor = "lightblue";
document.getElementById("foto").style.width = "500px";

//Criando uma função para um botão
function mudaTamanho(){
    document.getElementById("foto").style.width = '1000px';
}