class Car {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.velocidade = 0; //Velocidade iniciou em 0
    }
    
    exibirInfo() {
        return `Carro: ${this.marca} ${this.modelo} (${this.ano})`;
      }
    

    acelerar() {
        this.velocidade += 10; // += Está adicionando +10 na velocidade
        return `Velocidade: ${this.velocidade} km/h`;
    }

    frear() {
        this.velocidade -= 5; // Está subtraindo 5 da velocidade
        if (this.velocidade < 0) this.velocidade = 0;
        return `Velocidade: ${this.velocidade} km/h`;
        }
    }

    // Método para exibir informações sobre o carro
    const myCar = new Car('Honda', 'Civic', 2015);
    console.log(myCar.exibirInfo()); // Exibe as informações do carro
    console.log(myCar.acelerar()); // Velocidade: 10 km/h
    console.log(myCar.frear()); // Velocidade 5 km/h