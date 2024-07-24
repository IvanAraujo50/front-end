// Definição da classe Animal
class Animal {
    // Construtor da classe Animal
    constructor(nome) {
      this.nome = nome; // Atributo nome do animal
    }
  
    // Método genérico para fazer barulho
    fazerBarulho() {
      console.log('Fazendo barulho genérico');
    }
  }
  
  // Definição da classe Cachorro que herda de Animal
  class Cachorro extends Animal {
    // Construtor da classe Cachorro
    constructor(nome, raca) {
      // Chamada ao construtor da classe pai (Animal)
      super(nome);
      this.raca = raca; // Atributo raça específico do cachorro
    }
  
    // Método específico para latir
    latir() {
      console.log('Au au!');
    }
  
    // Sobrescrevendo o método fazerBarulho da classe Animal
    fazerBarulho() {
      console.log('Au au!');
    }
  }
  
  // Exemplo de uso das classes definidas
  let meuCachorro = new Cachorro('Rex', 'Labrador');
  meuCachorro.latir()
  meuCachorro.fazerBarulho()
  