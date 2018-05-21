interface Pessoa {
    nome: string;
    sobrenome: string;
}



class Estudante implements Pessoa {
    
    constructor(public nome: string, public sobrenome: string){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}


function saudacao(pessoa: Pessoa) {
    return 'Olá ' + pessoa;
}

var usuario = new Estudante('Fulano', 'MeuSobrenome');

document.body.innerHTML = saudacao(usuario);