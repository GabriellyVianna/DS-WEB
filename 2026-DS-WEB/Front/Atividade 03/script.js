var contadorItem = 0;

function adicionar(){

    contadorItem++;

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let rm = document.getElementById("rm").value;
    let telefone = document.getElementById("telefone").value;
    let turma = document.getElementById("turma").value;

    let novoItem = document.createElement("li");

    novoItem.setAttribute("id", "item" + contadorItem);

    novoItem.innerHTML =
        contadorItem + " - " + nome + "<br>" +
        "Email: " + email + "<br>" +
        "RM: " + rm + "<br>" +
        "Telefone: " + telefone + "<br>" +
        "Turma: " + turma + "<br>";

    let botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.setAttribute("onclick", "remover('item" + contadorItem + "')");

    novoItem.appendChild(botaoRemover);

    document.getElementById("lista").appendChild(novoItem);

    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("rm").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("turma").value = "";
}

function remover(id){
    var item = document.getElementById(id);
    document.getElementById("lista").removeChild(item);
}
