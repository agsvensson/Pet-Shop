function validaForm() {
    var nome = document.querySelectorAll('#nome')[0];
    var email = document.querySelectorAll('#email')[0];
    var mensagem = document.querySelectorAll('#mensagem')[0];
   
    // como exemplo vamos usar o getElementById (pode ser o querySelector)
    //var erro = document.getElementById('erro');
    var erro = document.querySelectorAll('#erro')[0];

    // NOME
    if (nome.value == '') {
        erro.innerHTML = 'Preencha o seu nome!';
        nome.focus();
        return false;
    }

    var rn = /[^a-zà-ú]/gi;
    if (nome.value.length < 2) {
        erro.innerHTML = 'Nome inválido!';
        nome.focus;
        return false;
    }


    // E-MAIL
    if (email.value == '') {
        erro.innerHTML = 'Preencha seu e-mail!';
        email.focus();
        return false;
    }

    var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (re.test(email.value) == false) {
        erro.innerHTML = 'E-mail inválido!';
        email.focus;
        return false;
    }

    
    // MENSAGEM
    if (mensagem.value == '') {
        erro.innerHTML = 'Digite sua mensagem!';
        mensagem.focus();
        return false;
    }
    
    // chegando aqui pode enviar o formulário
    alert('Mensagem enviada!   =)');
    return true;
}