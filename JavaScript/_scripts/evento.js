window.onload = function() {
    
    // ------------------------------------------------------
    // NOME DO FOMULÁRIO

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
                label.innerHTML = '&#9664; Digite o seu nome completo, por favor!';
            } else {
                label.innerHTML = '';
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
                label.innerHTML = '&#9664; Campo está vazio. Por favor, preenche-o com nome.';
            } else {
                label.innerHTML = '';
            }
        } 
    }


    // -----------------------------------------------------------
    // E-MAIL DO FOMULÁRIO

    var caixa = document.querySelector('input#email');
    caixa.onfocus = function() {
        console.log('on');
        var verificar = 'on';

        var label = document.getElementById("msgE");     
        //label.innerHTML = "teste";
        let i;
        for(i = 0; caixa.length; i++) {
            caixa[i].addEventListener('click', changecolor2);
        }

            if (verificar == 'on') {
                function changecolor2() {
                    let color = this.getAttribute('data-color');
                    document.documentElement.style.setProperty('--color', color);
                }
                label.innerHTML = '&#9664; Digite o seu E-mail, por favor!';
            } 
    }

    caixa.onblur = function() {  
        console.log('off');
        var verificar = 'off';

        var label02 = document.getElementById("msgE2");     
        //label.innerHTML = "teste";
        let i;
        for(i = 0; caixa.length; i++) {
            caixa[i].addEventListener('click', changecolor2);
        }

        if (verificar == 'off') {
            function changecolor2() {
                let color2 = this.getAttribute('data-color2');
                document.documentElement.style.setProperty('--color2', color2);
            }

            if (caixa.value == "") {
                label02.innerHTML = '&#9664; Campo está vazio. Por favor, preenche-o com E-mail.';
            } else {
                label02.innerHTML = '';
            }
        } 
    }
    
}