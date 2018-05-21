var Estudante = /** @class */ (function () {
    function Estudante(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    return Estudante;
}());
function saudacao(pessoa) {
    return 'Olá ' + pessoa;
}
var usuario = new Estudante('Fulano', 'MeuSobrenome');
document.body.innerHTML = saudacao(usuario);
