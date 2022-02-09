function detectarResolucao() {
    var largura;
    var arquivoCss = document.getElementById('#meuCSS');

    if (window.innerWidth) {
        largura = window.innerWidth;
    } else if ( document.documentElement && document.documentElement.clientWidth) {
        largura = document.documentElement.clientWidth
    } else if ( document.body) {
        largura = document.body;
    }

    if ( largura < 550) {
        arquivoCss.setAttribute("href","_css/css_smartphone.css");
    } else {
        arquivoCss.setAttribute("href","_css/css_desktop.css");
    }
}

console.log(window.innerWidth);

window.onload = window.onresize = detectarResolucao;