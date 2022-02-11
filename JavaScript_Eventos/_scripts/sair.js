function pegarPosicaoMouse(e) {
    var posX = document.querySelector('#posicaoX');
    var posY = document.querySelector('#posicaoY');

    posX.innerHTML = e.clientX;
    posY.innerHTML = e.clientY;

    if (e.clientY < 10) {
        var abrirJanela = document.querySelector('#janela');
        abrirJanela.style.display = 'block';
    } else {
        abrirJanela.style.display = 'none';
    }
}

function fechar() {
    var abrirJanela = document.querySelector('#janela');
    abrirJanela.style.display = 'none';
}

document.addEventListener("mousemove", pegarPosicaoMouse);