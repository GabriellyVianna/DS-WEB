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


