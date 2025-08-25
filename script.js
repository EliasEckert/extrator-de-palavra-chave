const botaoMostra Palavras = document.querySelector("#botao-palavrachave):

botaoMostra Palavras.addEventListener("click", mostra Palavras Chave):

function mostra Palavras Chave) {

const texto = document.querySelector("#entrada-de-texto").value;

const campoResultado = document.querySelector("#resultado-palavrachave"):

const palavrasChave processa Texto(texto);

campo Resultado.textContent = palavras Chave.join(".");  
}                         
function processa Texto(texto) {

let palavras = texto.split(/\P{L}+/u);
return palavras;
}  