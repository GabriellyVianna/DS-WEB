
var divResposta = document.getElementById("resposta") 

document.addEventListener('DOMContentLoaded', getItens, carregarCategorias())
document.getElementById('botaoEnviar').addEventListener('click', postProduto)

async function getItens() {
    var requisicao = await fetch("http://localhost/meus-planos-api/itens")
    var resposta = await requisicao.json()

    console.log(resposta)

    // Gera as linhas automaticamente para todos os itens do array
    const linhas = resposta.data.map(item => `
        <tr>
            <td>${item.id}</td>
            <td>${item.nome}</td>
            <td>${item.categoria_nome}</td>
            <td><button onclick="deleteProduto(${item.id})">Deletar</button></td>
            <td><input type="checkbox"${item.feito == 1 ? "checked" : ""} onchange="mudarStatus(${item.id}, this.checked)"></td>
        </tr>
    `).join("");
    
    console.log(linhas)
    divResposta.innerHTML = `
        <table class="sua-classe">
            <thead>
                <tr>
                    <th colspan="6" ><center>Itens Cadastrados</center></th>
                </tr>
                <tr>               
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Categorias</th>
                    <th>Opções</th>
                    <th>Status</th> 
                </tr>
            </thead>
            <tbody>
                ${linhas}
            </tbody>
        </table>
    `;
}

async function carregarCategorias() { //define a função assincrona (pode esperar)
    const resposta = await fetch("http://localhost/meus-planos-api/categorias"); //captura os dados no servidor
    const resultado = await resposta.json();//converte para json

    const select = document.getElementById("categoria_id");//captuta o id 

    let options = '<option value="">Selecione...</option>';

    resultado.data.forEach(cat => {//percorre cada linha
        options += `<option value="${cat.id}">${cat.nome}</option>`; //Cada dado ele vai capturar no Bd ele cria uma opção
    });

    select.innerHTML = options;//Pega opção do html
}


async function postProduto() {
    var requisicao = await fetch("http://localhost/meus-planos-api/itens", {
        method:  "POST",
        body: JSON.stringify({
            nome: nome.value,
            categoria_id: categoria_id.value
        })
    })

    var resposta = await requisicao.json()
    console.log(resposta)
    
    //Limpa o campo
    nome.value = ""
    categoria_id.value = ""

    getItens()
}

async function mudarStatus(id, feito) {
    await fetch("http://localhost/meus-planos-api/itens/" + id, {
        method: "PUT",
        body: JSON.stringify({
            feito: feito ? 1 : 0 //atualiza no bd
        })
    });

    getItens()
}


async function deleteProduto(id) {
     var requisicao = await fetch("http://localhost/meus-planos-api/itens/" + id, {
        method: "DELETE"
    })
 
    var resposta = await requisicao.json()
    console.log(resposta)
 
    getItens()
}