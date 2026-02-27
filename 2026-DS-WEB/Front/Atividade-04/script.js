document.addEventListener("DOMContentLoaded", function () {

    const btn = document.getElementById('showMessage');

    const box = document.getElementById('messageBox');

    const messages = [
        'Se você viu um pato!',
        'Parabéns, você foi um pirata!',
        'Já se você viu um coelho!',
        'Parabéns, você foi um fazendeiro!',
    ];

    let current = 0;

    btn.addEventListener('click', () => {

        box.classList.add('show');

        box.textContent = messages[current];

        current = (current + 1) % messages.length;
    });

    document.body.addEventListener("dblclick", function () {
    const cores = ["lightyellow", "lightblue", "lightgreen"];
    document.body.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
});

});

function trocarImagem1(){
    document.getElementById("foto")
    .setAttribute("src", "pirata.jpg")
}

function trocarImagem2(){
    document.getElementById("foto")
    .setAttribute("src", "pintor.jpg")
}

var quadrado = document.getElementById("quadrado")

document.addEventListener("mousemove", function(event){
    quadrado.style.marginTop = event.clientY + "px"
    quadrado.style.marginLeft = event.clientX + "px"
});

