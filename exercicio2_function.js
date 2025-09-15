// 2. Escreva uma função que retorne a área de um triângulo, a partir dos valores de base e altura fornecidos.

let altura = parseInt(prompt("Digite a altura do triângulo: "));
let base = parseInt(prompt("Digite a base do triângulo: "));

function area(base, altura) {
    return (base * altura) / 2;
}

console.log(`A área do triângulo de base ${base} e altura ${altura} é: ${area(base, altura)}!`);