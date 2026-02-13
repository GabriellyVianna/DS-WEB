//Criando o contador de itens
var contadorItem = 0

function adicionar (){
contadorItem ++ //Incrementando o contador de itens
let novoItem = document.createElement("li");//Crio o item
novoItem.textContent = contadorItem + "-" + prompt("Digite uma tarefa");//Adiciono texto ao meu item
novoItem.setAttribute("id",contadorItem);//Atribuo um ID

let botaoRemover = document.createElement("button");
botaoRemover.textContent = "Remover"; //Adicionar texto ao botao
botaoRemover.setAttribute("onclick","remover(" + contadorItem + ")")//Adicionar uma função ao botaõ

novoItem.appendChild(botaoRemover)//Adicionar o botão ao novo item
document.getElementById("lista").appendChild(novoItem);
}

function remover(itemLista){
    var item1 = document.getElementById(itemLista);
    document.getElementById("lista").removeChild(item1);
}
