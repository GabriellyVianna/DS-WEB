
//================================Everntos do Mouse===========================================
var area = document.getElementById("area")
var mensagem = document.getElementById("mensagem")

area.addEventListener("click", function(){
   mensagem.textContent = "Clique duplo detectado!";
});

area.addEventListener("dblclick", function(){
    //verificando a cor para poder realizar a mudança de cor 
    if(area.style.background == "pink" ){
        area.style.background = "blue";
    }else{
    area.style.background = "pink";
    }
});

area.addEventListener("mouseenter", function(){
    mensagem.textContent = "O mouse entrou na área!";
});

area.addEventListener("mouseleave", function(){
mensagem.textContent = "O mouse saiu da área!";
});

var posicao = document.getElementById("posicao")
area.addEventListener("mousemove", function(event){
posicao.textContent = "X:" + event.clientX + " Y:" + event.clientY;
});
     
area.addEventListener("contextmenu", function(event){
event.preventDefault();
alert("Botão direito clicado!");
});

//================================Everntos do Teclado==========================================
document.addEventListener("keydown", function(event){
console.log("Tecla pressionada: " + event.key);
});

document.addEventListener("keyup", function(event){
console.log("Tecla liberada: " + event.key);
});

document.addEventListener("keypress", function(event){
console.log("Caractere digitado: " + event.key);
});

document.addEventListener("keydown", function(event){
// Exibe a tecla pressionada
var campo = document.getElementById("resultado");
campo.textContent = "Tecla pressionada: " + event.key;
// Também mostra no console
console.log("Tecla pressionada: " + event.key);
});

//================================Everntos do Formulário=======================================

//================================Everntos do Janela===========================================