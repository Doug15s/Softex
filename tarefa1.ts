class Carro {
    modelo: string;
    marca: string;
    ano: number;

    constructor(modelo: string, marca: string, ano: number) {
        this.modelo = modelo;
        this.marca = marca;
        this.ano = ano;
    }

    exibirCarro() {
        console.log(`Seu carro é um ${this.marca} ${this.modelo}, ano ${this.ano}.`);
    }
}

const carro1 = new Carro("Jetta", "Volkswagen", 2010);
carro1.exibirCarro();