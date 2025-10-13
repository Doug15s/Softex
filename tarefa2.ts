class Animal {
    public nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    emitirSom(som: string): void {
        
    }

    mover(distancia: string): void {
        
    }
}

class Gato extends Animal {

    emitirSom(som: string): void {
        console.log(`O gato ${this.nome} está ${som}.`);
    }

    mover(distancia: string): void {
        console.log(`O gato ${this.nome} anda cerca de ${distancia} metros por minuto, sobre as quatro patas.`);
    }
}

class Passaro extends Animal {

    emitirSom(som: string): void {
        console.log(`O ${this.nome} está ${som}.`);
    }

    mover(distancia: string): void {
        console.log(`O ${this.nome} voa cerca de ${distancia} metros por minuto.`);
    }
}

const gato1 = new Gato("persa");
gato1.emitirSom("miando");
gato1.mover("20");

const passaro1 = new Passaro("João de barro");
passaro1.emitirSom("cantando");
passaro1.mover("50");