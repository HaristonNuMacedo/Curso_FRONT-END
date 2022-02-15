var minhaFoto, albumFoto, indice, intervalo;

function mudarFoto() {
    minhaFoto.setAttribute("src", albumFoto[indice]);
    indice ++;

    if (indice >= albumFoto.length) {
        indice --;
    }
}

function iniciar() {
    minhaFoto = document.querySelector("#espacoFoto");
    albumFoto = ["_img/foto.jpg", "_img/casa-moderna.jpg"];
    indice = 0;

    intervalo = setInterval(mudarFoto, 3000);
}

window.onload = iniciar;