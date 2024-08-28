const prompt = require("prompt-sync")(); //modulo prompt para input de dados
// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.

// let num1 = Number(
//     prompt("Insira um número inteiro para verificar se é par ou impar: ")
// );
// if (num1 % 1 !== 0) {
//     console.log("Tente novamente inserindo um número inteiro.");
// } else {
//     if (num1 % 2 === 0) {
//         console.log("Par");
//     } else {
//         console.log("Ímpar");
//     }
// }

// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
// adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
// controle if-else.

// let age = Number(prompt("Informe a sua idade: "));

// let ageRange;

// if (age >= 0 && age <= 12) {
//     ageRange = "Criança";
// } else if (age >= 13 && age <= 17) {
//     ageRange = "Adolescente";
// } else if (age >= 18 && age <= 60) {
//     ageRange = "Adulto";
// } else {
//     ageRange = "Idade Inválida";
// }
// console.log(`Pela idade informada você se qualifica como: ${ageRange}.`)

// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

// let grade = prompt("Digite a nota do aluno: ");

// if (grade >= 7) {
//   console.log("Aprovado");
// } else if (grade >= 4) {
//   console.log("Recuperação");
// } else {
//   console.log("Reprovado");
// }

// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

// let num1 = Number(prompt('Escolha uma opção: 1-Solteiro 2-Casado 3-Divorciado: '));
// switch(num1){
//     case 1:
//         console.log('Usuário é solteiro')
//         break
//     case 2:
//         console.log('Usuário é casado')
//         break
//     case 3:
//         console.log('Usuário é divorciado')
//         break
//     default:
//         console.log('Usuário digitou numero invalido!')
// }

// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

// let weight = prompt("Digite o seu peso (em kg): ");
// let height = prompt("Digite a sua altura (em metros): ");

// let imc = weight / (height * height);
// if (imc < 18.5) {
//   console.log("Baixo peso");
// } else if (imc < 25) {
//   console.log("Peso normal");
// } else if (imc < 30) {
//   console.log("Sobrepeso");
// } else {
//   console.log("Obesidade");
// }
// console.log("O seu IMC é: " + imc.toFixed(2));

// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

// a = 1
// b = 1
// c = 1

// if (a + b > c && a + c > b && b + c > a) {
//     console.log('Os numeros indicados formam um triangulo!')
//     if (a === b || a === c || b === c) {
//         console.log('Triangulo Isosceles')
//     } else if (a !== b && b !== c) {
//         console.log('Triangulo Escaleno')
//     } else if ((a === b && b === c)){
//         console.log('Triangulo Equilatero')
//     }else{
//         console.log('Numeros invalidos!')
//     }
// }

// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

// let apple = Number(prompt("Informe a quantidade de maças compradas: "));
// let num1 = 0.30
// let num2 = 0.25
// let totalPrice = 0

// if (apple <= 12) {
//     totalPrice = apple * num1
// } else {
//     totalPrice = apple * num2
// }
// console.log(`Valor total em maças é R$ ${totalPrice}`)

// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

// const num1 = prompt("Digite um número: ");
// const num2 = prompt("Digite mais um número: ");

// if (num1 > num2) {
//   console.log(num2, num1);
// } else {
//   console.log(num1, num2);
// }

// 9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
// utilizando um loop for.

// for (let i = 10; i >= 1; i--) {
// console.log(i)
// }

// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

// let num1 = Number(prompt("Informe um número para ser impresso 10x no console: "));

// for (let i = 10; i >= 1; i--) {
//     console.log(num1)
// }

// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

// let num1 = 0;
// let sum = 0;

// for (let i = 1; i <= 5; i++) {
//   num1 = Number(prompt(`Insira o numero ${i} da ordem da lista para fazer a soma de todos: `));
//   sum += num1;
// }
// console.log(sum);

// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
// 10) utilizando um loop for.

// let num1 = Number(prompt("Informe um número para verificar a tabuada de 1 a 10: "));

// for (let i = 1; i <= 10; i++) {
//     console.log(num1 * i)
// }

// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

// let sum = 0;
// let count = 0;
// let num1 = 1;

// while (num1 != 0) {
//   num1 = parseFloat(
//     prompt("Digite um número, digite 0 para calcular a média: ")
//   );

//   if (num1 != 0) {
//     sum += num1;
//     count++;
//   }
// }
// let avg = sum / count;
// console.log(`A média dos números é: ${avg}`);

// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

// let num1 = Number(prompt("Digite um número para o cálculo de fatorial: "));

// let fat = 1;

// for (let i = 1; i <= num1; i++) {
//   fat *= i;
// }
// console.log(`O resultado do fatorial de ${num1} é ${fat}!`);

// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

// function printFibonacci(counterLimit) {
//     let a = 0, b = 1;
//     for (let i = 0; i < counterLimit; i++) {
//         console.log(a);
//         let temp = a;
//         a = b;
//         b = temp + b;
//     }
// }
// printFibonacci(10);
