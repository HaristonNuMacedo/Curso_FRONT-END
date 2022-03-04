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
                if (caixa.value != "") {
                    label.innerHTML = '';
                } else {
                    label.innerHTML = '&#9664; Digite o seu nome completo, por favor!';
                }
            } else {
                label.innerHTML = '';
            }
    }

    caixa.onblur = function() {  
        console.log('off');
        var verificar = 'off';

        var label2 = document.getElementById("msg2");   
        var label = document.getElementById("msg");   
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
                label2.innerHTML = '&#9664; Campo está vazio. Por favor, preenche-o com nome.';
            } else {
                label2.innerHTML = '';
                label.innerHTML = '';
            }
        } else {
            label2.innerHTML = '';
        }
    }


    // -----------------------------------------------------------
    // E-MAIL DO FOMULÁRIO

    var caixa2 = document.querySelector('input#email');
    caixa2.onfocus = function() {
        console.log('on');
        var verificar = 'on';

        var label01 = document.getElementById("msgE");     
        //label.innerHTML = "teste";
        let i;
        for(i = 0; caixa2.length; i++) {
            caixa2[i].addEventListener('click', changecolor2);
        }

            if (verificar == 'on') {
                function changecolor2() {
                    let color = this.getAttribute('data-color');
                    document.documentElement.style.setProperty('--color', color);
                }

                if (caixa.value != "") {
                    label01.innerHTML = '';
                } else {
                    label01.innerHTML = '&#9664; Digite o seu E-mail, por favor!';
                }
            } else {
                label01.innerHTML = '';
            }
    }

    caixa2.onblur = function() {  
        console.log('off');
        var verificar = 'off';

        var label02 = document.getElementById("msgE2");  
        var label01 = document.getElementById("msgE");     
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

            if (caixa2.value == "") {
                label02.innerHTML = '&#9664; Campo está vazio. Por favor, preenche-o com E-mail.';
            } else {
                label02.innerHTML = '';
                label01.innerHTML = '';
            }
        } else {
            label02.innerHTML = '';
        }
    }

    // -----------------------------------------------------------
    // DATA DE NASCIMENTO DO FOMULÁRIO



    // ---------------------------------------------------------------
    // CHECKBOX DO PAIS
    qtdFilhos.onclick = function() {
        if (qtdFilhos.checked) {
            filhos.style.display = 'block';
        } else {
            filhos.style.display = 'none';
        }
    }
    filhos.style.display = 'none';

    // ---------------------------------------------------------------
    // CHECKBOX DO PAIS
    escolherpais.onclick = function() {
        if (escolherpais.checked) {
            pais.style.display = 'block';
        } else {
            pais.style.display = 'none';
        }
    }
    pais.style.display = 'none';
}


    // ---------------------------------------------------------------
    // FUNÇÃO ENVIAR DADOS PARA A MESMA PÁGINA MOSTRANDO COMO QUE PEGOU E PASSOU OS DADOS 
    // PARA A TELA APÓS CLICAR NO BOTÃO CONFIRMAR
    // ---------------------------------------------------------------
    function enviar() {
        var nome = document.querySelector('input#nome').value;
        var email = document.querySelector('input#email').value;
        var filho = document.querySelector('input#valor').value;
        
        var dataNasc = document.querySelector('input#dataNasc').value;
        data = new Date(dataNasc);
        dataFormatada = data.toLocaleDateString('pt-BR', {timeZone: 'UTC'});
        
        var pais = document.querySelector('input#pais');
        var escolherpais = document.querySelector('input#escolherpais');

        if (nome != "" && email != "" && dataNasc != "") {
            if (escolherpais.checked == false) {
                var nPais = pais.value = 'Brasil';
                dados.innerHTML = '<strong>Nome: </strong>' + nome + '<br><strong>E-mail : </strong>' + email + '<br><strong>Data de Nascimento: </strong>' + dataFormatada + '<br><strong>Quantidade de Filhos: </strong>' + filho + '<br><strong>País: </strong>' + nPais;  
            } else {
                dados.innerHTML = '<strong>Nome: </strong>' + nome + '<br><strong>E-mail : </strong>' + email + '<br><strong>Data de Nascimento: </strong>' + dataFormatada + '<br><strong>Quantidade de Filhos: </strong>' + filho + '<br><strong>País: </strong>' + pais.value;  
            }
        } else {
            dados.innerHTML = '<p style="font-size: 16px; color: red;">Precisa preencher todos os dados do Formulário.</p>';
        }
        
    }