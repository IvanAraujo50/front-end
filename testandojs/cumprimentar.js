// Definindo a classe Pessoa
class Pessoa {
    // Construtor
    constructor(nome, idade, nacionalidade) {
        this.nome = nome;
        this.idade = idade;
        this.nacionalidade = nacionalidade;
    }

    // Método para cumprimentar
    cumprimentar() {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e nasci no ${this.nacionalidade}.`);
    }
    }

    // Criando uma nova instância da classe Pessoa
    const pessoa1 = new Pessoa('Ivan', 23, 'Brasil');

    //Chamando o método cumprimentar
    pessoa1.cumprimentar();
