interface Pessoa {
    nome: string;
    sobrenome: string;
}


function saudacao(pessoa: Pessoa) {
    return 'Olá ' + pessoa;
}

var usuario = {
    nome: 'Fulano',
    sobrenome : 'Lorem'
};

document.body.innerHTML = saudacao(usuario);