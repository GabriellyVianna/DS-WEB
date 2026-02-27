function trocarImagem1(){
    document.getElementById("foto")
    .setAttribute("src", "imagem1.jpg")
}

function trocarImagem2(){
    document.getElementById("foto")
    .setAttribute("src", "imagem2.webp")
}

function mostrarScr(){
    let valorScr = document.getElementById("foto")
    .getAttribute("src")

    console.log(valorScr)
}

document.body.addEventListener("dblclick", function(){
    document.body.style.backgroundColor = "lightyellow";
});

area.addEventListener("click", function(){
   mensagem.textContent = "Clique duplo detectado!";
});

document.addEventListener("keypress", function(event){
console.log("Caractere digitado: " + event.key);
});