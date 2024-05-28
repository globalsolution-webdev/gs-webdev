// ALTERNANDO AS CORES DO BACKGROUND DA PÁGINA

// Declarando as variáveis
let body = document.querySelector('body');
let classCores = ['cor1', 'cor2', 'cor3'];
let indexCor = 0;
let timeCor = 3000;

function alternarCores() {
    body.setAttribute('class', `${classCores[indexCor]}`);
    indexCor++;

    if (indexCor == classCores.length) {
        indexCor = 0;
    }
    setTimeout('alternarCores()', timeCor);
}
alternarCores();

// CRIANDO UM SLIDESHOW AUTOMÁTICO (pagina index)

// Declarando as variáveis
let imagens = [ './img/oceano1.jpeg','./img/oceano2.jpg', './img/oceano3.jpg', './img/oceano4.jpg',];
let index = 0;
let time = 3000;

// Criando a função do slideshow
function slideShow() {
    document.getElementById('imgbanner').src=imagens[index];
    index++;

    if (index == imagens.length) {
        index = 0;
    }
    setTimeout('slideShow()', time);
}

// REDIRECIONANDO OS BOTÕES
function redirect1() {
    window.location.href = 'https://www.oceans20brasil.org/';
}

function redirect2() {
    window.location.href = 'https://www.unesco.org/pt/g20/environmental-climate-sustainability';
}

// VALIDANDO O USUÁRIO NA PÁGINA DE LOGIN
function validar(){
    //declarando a variavel
    let usuario =document.getElementById("usuario").value;
    let senha =document.getElementById("senha").value;
    if(usuario == "Admin" && senha === "12345"){
        window.open('sobre.html');
    }else{
        alert("usuario e senha inválidos");
    }
}

// VALIDANDO OS CAMPOS DO CONTATO

// Declarando as variáveis
const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const telInput = document.querySelector("#telefone")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    //verifica se o nome esta vazio
    if(nameInput.value === ""){
        alert("Preencha seu nome")
        return;
    }

    //verifica se o email esta vazio
    if(emailInput.value === ""){
        alert("Preencha seu seu email")
        return;
    }

    //verifica se o telefone esta vazio
    if(telInput.value === ""){
        alert("Preencha seu seu telefone")
        return;
    }

  // se todos os capos estiverem preenchidos enviar form
  form.submit();
});
