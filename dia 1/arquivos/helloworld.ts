function saudacao(pessoa: string) {
    return 'Olá ' + pessoa;
}

var usuario = 'Fulano';
document.body.innerHTML = saudacao(usuario);