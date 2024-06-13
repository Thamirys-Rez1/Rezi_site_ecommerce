
// Função Onclick + Alert para alertar sobre uma compra realizada após apertar o botão 'comprar';
function adicionarAoCarrinho(nomeDoProduto) {
    alert(" Parabéns pela compra, seu produto adicionado ao carrinho: " + nomeDoProduto);
}

document.querySelectorAll('.produto button').forEach(function (botao) {
    botao.addEventListener('click', function () {
        var nomeDoProduto = this.parentNode.querySelector('h3').textContent;
        adicionarAoCarrinho(nomeDoProduto);
    });
});

// Função para mudar a cor dos nomes da lista do menu quando o cursor do mouse passar por cima
function changeColor(element) {
    element.style.color = '#838C76';
}

function restoreColor(element) {
    element.style.color = '';
}

// Função para dar zoom na imagem quando o mouse entrar na grid
function zoomIn(element) {
    element.style.transform = "scale(1.5)";
}

// Função para resturar a imagem ao seu tamanho normal
function zoomOut(element) {
    element.style.transform = "scale(1)";
}

var imagens = document.querySelectorAll('.produto img');
imagens.forEach(function (imagem) {
    imagem.addEventListener('mouseover', function () {
        zoomIn(this);
    });

    imagem.addEventListener('mouseout', function () {
        zoomOut(this);
    });
});
// Adiciona uma função para o áudio da página
var audio = document.getElementById('myAudio');

// Adicione um evento de tecla para a tecla de espaço
document.addEventListener('keydown', function (event) {
    if (event.key === ' ') {
     
        audio.play();
    }
});
// Seleciona a lista do menu ao trocar a cor
function toggleMenu() {
    var menuList = document.querySelector('.menu-list');
    menuList.style.display = (menuList.style.display === 'block') ? 'none' : 'block';
}