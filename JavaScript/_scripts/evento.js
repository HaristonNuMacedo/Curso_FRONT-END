window.onload = function() {
    var caixa = document.querySelector('input#nome');
    caixa.onfocus = function() {
        console.log('on');
        var verificar = 'on';

        var label = document.getElementById("msg");     
        //label.innerHTML = "teste";
        let i;
        for(i = 0; caixa.length; i++) {
            caixa[i].addEventListener('click', changecolor);
        }

            if (verificar == 'on') {
                function changecolor() {
                    let color = this.getAttribute('data-color');
                    document.documentElement.style.setProperty('--color', color);
                }
                label.innerHTML = 'Digite o seu nome completo neste campo, por favor!';
            } 
    }

    caixa.onblur = function() {  
        console.log('off');
        var verificar = 'off';

        var label = document.getElementById("msg2");     
        //label.innerHTML = "teste";
        let i;
        for(i = 0; caixa.length; i++) {
            caixa[i].addEventListener('click', changecolor);
        }

        if (verificar == 'off') {
            function changecolor() {
                let color2 = this.getAttribute('data-color2');
                document.documentElement.style.setProperty('--color2', color2);
            }

            if (caixa.value == "") {
                label.innerHTML = 'Campo está vazio. Por favor, preencha com nome este campo.';
            } else {
                label.innerHTML = '';
            }
        } 
    }

    
}