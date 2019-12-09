function trocaDog(imagemNova, nomeNovo) {
    document.querySelectorAll('#dogao')[0].src = imagemNova;

    // acessando o h2 que tem o nome do cão
    document.querySelectorAll('h2')[0].innerHTML = nomeNovo;

    console.log('Trocou', imagemNova, nomeNovo);
}