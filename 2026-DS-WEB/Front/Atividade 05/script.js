//================================================Validação de Email================================================//
// Seleciona os elementos
const emailInput = document.querySelector("#email");
const resultMessage = document.querySelector("#erro-email");
const emailForm = document.querySelector("#formulario");

// Função que valida o e-mail com regex
function validateEmail(email) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}

// Evento de quando o usuario clicar em enviar
emailForm.addEventListener("submit", function(event) {

    // Evita que a página recarregue
    event.preventDefault();

    //Acessa o texto pelo input
    const emailValue = emailInput.value;

    // Verifica se o e-mail é válido
    if (validateEmail(emailValue)) {
        resultMessage.textContent = "E-mail válido! (" + emailValue + ")";
        resultMessage.style.color = "green";
    } else {
        resultMessage.textContent = "E-mail inválido!";
        resultMessage.style.color = "red";
    }

});

//================================================Validação de Cpf================================================//
const formulario = document.querySelector("#formulario");
const cpfInput = document.querySelector("#cpf");
const erroCpf = document.querySelector("#erro-cpf");

// Função que valida o CPF
function validaCPF(cpf) {

  // Variáveis usadas no cálculo do CPF
  var Soma = 0;
  var Resto;

  // Remove tudo que não for número do CPF
  var strCPF = String(cpf).replace(/[^\d]/g, '');

  // Verifica se o CPF tem 11 dígitos
  if (strCPF.length !== 11) //length conta quantos numeros tem na string
    return false;

  // Bloqueia CPFs inválidos com números repetidos
  if ([
    '00000000000','11111111111','22222222222','33333333333',
    '44444444444','55555555555','66666666666','77777777777',
    '88888888888','99999999999'
  ].indexOf(strCPF) !== -1)
    return false;

  // Primeiro cálculo para verificar o CPF
  for (let i = 1; i <= 9; i++)
    Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);

  // Calcula o resto da divisão
  Resto = (Soma * 10) % 11;

  // Se o resto for 10 ou 11 vira 0
  if (Resto == 10 || Resto == 11)
    Resto = 0;

  // Verifica se o primeiro dígito verificador está correto
  if (Resto != parseInt(strCPF.substring(9, 10)))
    return false;

  // Zera a soma para fazer o segundo cálculo
  Soma = 0;

  // Segundo cálculo do CPF
  for (let i = 1; i <= 10; i++)
    Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);

  // Calcula novamente o resto
  Resto = (Soma * 10) % 11;

  // Ajusta se o resultado for 10 ou 11
  if (Resto == 10 || Resto == 11)
    Resto = 0;

  // Verifica o segundo dígito verificador
  if (Resto != parseInt(strCPF.substring(10, 11)))
    return false;

  // Se passou por todas as verificações o CPF é válido
  return true;
}

// Evento executado quando o formulário for enviado
formulario.addEventListener("submit", function(event) {

  // Impede o formulário de recarregar a página
  event.preventDefault();

  // Pega o valor digitado no campo CPF
  const cpfValor = cpfInput.value;

  // Verifica se o CPF é válido
  if (validaCPF(cpfValor)) {

    // Mostra mensagem de CPF válido em verde
    erroCpf.textContent = "CPF válido! (" + cpfValor + ")";
    erroCpf.style.color = "green";

  } else {

    // Mostra mensagem de CPF inválido em vermelho
    erroCpf.textContent = "CPF inválido!";
    erroCpf.style.color = "red";

  }

});
//================================================Validação de telefone================================================//
const telefoneInput = document.querySelector("#telefone");
const erroTelefone = document.querySelector("#erro-telefone");

formulario.addEventListener("submit", function(event) {
  event.preventDefault(); // impede envio automático

  //Pega o que o usuário digitou no campo de telefone.
  const telefone = telefoneInput.value;

  // Regex para validar telefone no formato (11) 99999-9999
  const regex = /^\(\d{2}\)\s?\d{4,5}-\d{4}$/;

  if (regex.test(telefone)) {
    erroTelefone.textContent = "Telefone válido! (" + telefone + ")";
    erroTelefone.style.color = "green";
  } else {
    erroTelefone.textContent = "Telefone inválido! ";
    erroTelefone.style.color = "red";
  }
});

//================================================Validação de Cep================================================//
const cepInput = document.getElementById("cep");
const erroCep = document.getElementById("erro-cep");

formulario.addEventListener("submit", function(event) {
  event.preventDefault(); // para envio para validar

  //Pega o que o usuário digitou no campo de CEP.
  const cep = cepInput.value;

  // Regex para CEP no formato 00000-000
  const regex = /^\d{5}-\d{3}$/;

  if (regex.test(cep)) { //testa se é true ou false o cpf
    erroCep.textContent =  "CEP válido! (" + cep + ")";
    erroCep.style.color = "green";
  } else {
    erroCep.textContent = "CEP inválido! Use formato 00000-000";
    erroCep.style.color = "red";
  }
});


//================================================Validação de Url================================================//
const urlInput = document.getElementById("url");
const erroUrl = document.getElementById("erro-url");

formulario.addEventListener("submit", function(event) {
  event.preventDefault(); // impede envio para validar

  //Pega o valor digitado pelo usuário no campo de URL.
  const url = urlInput.value;

  // Verifica se começa com http:// ou https://
  if (url.startsWith("http://") || url.startsWith("https://")) {
    erroUrl.textContent = "URL válida! (" + url + ")";
    erroUrl.style.color = "green";
  } else {
    erroUrl.textContent = "URL inválida! Deve começar com http:// ou https://";
    erroUrl.style.color = "red";
  }
});

//================================================Validação de Nome================================================//
const nomeInput = document.getElementById("nome");
const erroNome = document.getElementById("erro-nome");

formulario.addEventListener("submit", function(event) {
  event.preventDefault(); // impede envio para validar

  const nome = nomeInput.value;

  // Validação: mínimo 3 caracteres, apenas letras e espaços
  if (nome.length < 3 || !/^[A-Za-zÀ-ÿ\s]+$/.test(nome)) {//comprimento length
    erroNome.textContent = "Nome inválido! Use pelo menos 3 letras e só letras.";
    erroNome.style.color = "red";
  } else {
    erroNome.textContent = "Nome válido! (" + nome + ")";
    erroNome.style.color = "green";
  }
});

//================================================Validação de cartão================================================//
const cartaoInput = document.getElementById("cartao");
const erroCartao = document.getElementById("erro-cartao");

formulario.addEventListener("submit", function(event) {
  event.preventDefault(); // impede envio para validar

  const cartao = cartaoInput.value.replace(/\s+/g, ""); // tds os espaços em branco vao se tortar nulo

  // Verifica se tem exatamente 16 dígitos
  if (!/^\d{16}$/.test(cartao)) {
    erroCartao.textContent = "Cartão inválido! Digite 16 números.";
    erroCartao.style.color = "red";
  } else {
    erroCartao.textContent = "Cartão válido!";
    erroCartao.style.color = "green";
  }
});

//================================================Validação de valor================================================//
const valorInput = document.getElementById("valor");
const erroValor = document.getElementById("erro-valor");

formulario.addEventListener("submit", function(event) {
  event.preventDefault(); // impede envio para validar

  const valor = valorInput.value;

  // Regex simples para valor monetário no formato 1.299,90
  const regex = /^\d{1,3}(\.\d{3})*,\d{2}$/; //*serve para poder repetir exeplo 1 milhão

  if (!regex.test(valor)) {
    erroValor.textContent = "Valor inválido! Use o formato 1.299,90";
    erroValor.style.color = "red";
  } else {
    erroValor.textContent = "Valor válido! (" + valor + ")";
    erroValor.style.color = "green";
  }
});

//================================================Validação da data================================================//
const dataInput = document.getElementById("data-nascimento");
const dataErro = document.getElementById("erro-data-nascimento");

formulario.addEventListener("submit", function(event) {
  event.preventDefault(); // impede envio para validar

  //Pega o que o usuário digitou no campo de data.
  const data = dataInput.value;

  if (!data) {//se a data estiver vazia
    dataErro.textContent = "Data obrigatória!";
    dataErro.style.color = "red";
  } else {
    const partes = data.split("-");//separa a data em uma lista de 3 partes: [ano, mês, dia]
    const dataFormatada = `${partes[2]}/${partes[1]}/${partes[0]}`;//reorganiza para o formato DD/MM/AAAA

    dataErro.textContent = "Data válida! (" + dataFormatada + ")";//printa na tela o valor da data tbm 
    dataErro.style.color = "green";
  }
});

//================================================Validação da senha================================================//
const senhaInput = document.getElementById("senha");
const confirmaSenhaInput = document.getElementById("confirma-senha");
const erroSenha = document.getElementById("erro-senha");

formulario.addEventListener("submit", function(event) {
  event.preventDefault(); // impede envio para validar

  //Pega os valores digitados pelo usuário nos campos de senha e confirmação.
  const senha = senhaInput.value;
  const confirmaSenha = confirmaSenhaInput.value;

  // Valida senha mínima de 8 caracteres
  if (senha.length < 8) {//length conta quantos números tem
    erroSenha.textContent = "Senha muito curta! Use no mínimo 8 caracteres.";
    erroSenha.style.color = "red";
  } 
  // Valida se a confirmação bate com a senha
  else if (senha !== confirmaSenha) {
    erroSenha.textContent = "Senhas não coincidem!";
    erroSenha.style.color = "red";
  } 
  // Se tudo certo
  else {
    erroSenha.textContent = "Senha válida!"; 
    erroSenha.style.color = "green";
  }
});