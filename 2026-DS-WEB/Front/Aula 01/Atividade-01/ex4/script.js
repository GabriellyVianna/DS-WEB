let numero = Number(prompt("Digite um número para converter:"));
function converteFparaC(F) {
    var celsius = (F - 32) * (5 / 9)
    return celsius;
}
alert(converteFparaC(numero));