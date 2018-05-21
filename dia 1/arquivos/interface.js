function saudacao(pessoa) {
    return 'Olá ' + pessoa;
}
var usuario = {
    nome: 'Fulano',
    sobrenome: 'Lorem'
};
document.body.innerHTML = saudacao(usuario);
