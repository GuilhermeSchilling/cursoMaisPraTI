// Exercicio 1

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

// Exercicio 2

// function verificarPrimo(toVerify) {
//     if (toVerify <= 1) {
//         console.log("Nao é primo");
//         return;
//     }
//     if (toVerify === 2) {
//         console.log("É primo");
//         return;
//     }
//     if (toVerify % 2 === 0) {
//         console.log("Nao é primo");
//         return;
//     }

//     for (let i = 3; i <= Math.sqrt(toVerify); i += 2) {
//         if (toVerify % i === 0) {
//             console.log("Nao é primo");
//             return;
//         }
//     }
//     console.log("É primo");
// }
// verificarPrimo(29);

// Exercicio 3

// const nLines = 7;
// for (let i = 1; i <= nLines; i++) {
//     let line = '';
//     for (let j = 1; j <= i; j++) {
//         line += j + ' ';
//     }
//     console.log(line);
// }

// Exercicio 4

// let nLimit = 5;
// let factorial = 1;
// while (nLimit > 0) {
//     factorial *= nLimit;
//     nLimit--;
// }
// console.log(`O fatorial do numero escolhido é: ${factorial}`);

// Exercicio 5

// let n1 = 123455;
// let reverse = 0;
// while (n1 > 0) {
//     let b = n1 % 10;
//     reverse = reverse * 10 + b;
//     n1 = Math.floor(n1 / 10);
// }
// console.log(`Numero invertido: ${reverse}`);

// Exercicio 6

// let num = 242;
// let nOriginal = num;
// let nReverse = 0;
// while (num > 0) {
//     let a = num % 10;
//     nReverse = nReverse * 10 + a;
//     num = Math.floor(num / 10);
// }
// if (nOriginal === nReverse) {
//     console.log(nOriginal + " é um palíndromo.");
// } else {
//     console.log(nOriginal + " não é um palíndromo.");
// }

// Exercicio 7

// function digitCounter(num1) {
//     let counter = 0;
//     num1 = Math.abs(num1);
//     do {
//         num1 = Math.floor(num1 / 10);
//         counter++;
//     } while (num1 > 0);
//     return counter;
// }
// let num1 = 12345;
// let digits = digitCounter(num1);
// console.log(`O número ${num1} tem ${digits} dígitos.`);

// Exercicio 8

// function digitsSum(num1) {
//     let sum = 0;
//     num1 = Math.abs(num1);
//     do {
//         let digit = num1 % 10;
//         sum += digit;
//         num1 = Math.floor(num1 / 10);
//     } while (num1 > 0);

//     return sum;
// }
// let num1 = 12345;
// let sum = digitsSum(num1);
// console.log(`A soma dos dígitos de ${num1} é ${sum}.`);

// Exercicio 9

// function printStars(lines) {
//     let i = lines;
//     do {
//         let start = "";
//         let j = 0;
//         do {
//             start += "*";
//             j++;
//         } while (j < i);
//         console.log(start);
//         i--;
//     } while (i > 0);
// }
// let lines = 12;
// printStars(lines);

// Exercicio 10

// let num1 = 25
// let num2 = 5

// let a = num1
// let b = num2

// do {
//     let temp = b
//     b = a % b
//     a = temp
// } while (b !== 0)

// const MDC = a

// console.log(`O maior divisor comum de ${num1} e ${num2} é ${MDC}`)
