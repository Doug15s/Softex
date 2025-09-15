// 3. Escreva uma função que calcule e retorne o fatorial de um número inteiro fornecido pelo usuário.

let numero = parseInt(prompt("Digite o número que você deseja calcular o fatorial."));

let fatorial = function(x) {
    if (x === 0) {
        return 1;
			
    } else {
        return x * fatorial(x-1);
    }
}

let resultado = fatorial(numero);

console.log(`O fatorial do número ${numero} é ${resultado}!`);