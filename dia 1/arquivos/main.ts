interface Pessoa {
    nome: string;
    sobrenome: string;
}



class Estudante implements Pessoa {
    
    private escola: any;

    constructor(public nome: string, public sobrenome: string){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    public console(str: any){
        console.log(str);
    }

}


function saudacao(pessoa: Pessoa) {
    return 'Olá, ' + pessoa.nome + ' ' + pessoa.sobrenome;
}

var usuario = new Estudante('Fulano', 'MeuSobrenome');
// usuario.escola = 'colégio x';
usuario.console('ok');

document.body.innerHTML = saudacao(usuario);