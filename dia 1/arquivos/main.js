var Estudante = /** @class */ (function () {
    function Estudante(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    Estudante.prototype.console = function (str) {
        console.log(str);
    };
    return Estudante;
}());
function saudacao(pessoa) {
    return 'Olá, ' + pessoa.nome + ' ' + pessoa.sobrenome;
}
var usuario = new Estudante('Fulano', 'MeuSobrenome');
// usuario.escola = 'colégio x';
usuario.console('ok');
document.body.innerHTML = saudacao(usuario);
