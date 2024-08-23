const prompt = require('prompt-sync')()

// Exercicio 1

// const num1 = Number(prompt('Digite um numero: '))

// if(num1 > 0){
//     console.log('O numero informado é positivo!')
// } else if (num1 <0 ){
//     console.log('O numero informado é negativo!')
// } else if (num1 ===0){
//     console.log('O numero é igual a zero!')
// }else{
//     console.log('Erro! Não foi informado um numero!')
// }

// Exercicio 2

// const year = Number(prompt('Digite um numero referente a um ano: '))

// if ((year % 4 === 0 && year % 100 !== 0) || (year % 4 === 0)){
//     console.log(`O ano ${year} é bissexto!`)
// } else{
//     console.log(`${year} não é um ano bissexto!`)
// }

// Exercicio 3

// let nota1 = Number(prompt('Informe a primeira nota: '))
// let nota2 = Number(prompt('Informe a segunda nota: '))
// let nota3 = Number(prompt('Informe a terceira nota: '))
// let grade = ''

// let media = (nota1 + nota2 + nota3)/3

// if(media >= 90){
//     console.log(`A média das notas é ${media} `)
//     grade = 'A'
// } else if(media <= 80 && media > 70){
//     console.log(`A média das notas é ${media} `)
//     grade = 'B'
// }else if(media < 70 && media > 60){
//     console.log(`A média das notas é ${media} `)
//     grade = 'C'
// }else if(media < 60 && media > 50){
//     console.log(`A média das notas é ${media} `)
//     grade = 'D'
// }else if(media < 50 && media >40){
//     console.log(`A média das notas é ${media} `)
//     grade = 'E'
// }else{
//     console.log(`A média das notas é ${media} `)
//     grade = 'F'
// } 

// console.log('O conceito do aluno é: ' + grade)

// Exercicio 4

// let entrada = Number(prompt('Informe um numero para verificacao de par e impar: '))

// if( entrada % 2 === 0) {
//     console.log('Par!')
// } else{console.log('Impar!') 
// }

// Exercicio 5

// let age = Number(prompt('Informe a sua idade: '))

// let ageRange

// if (age >= 5 && age <= 7) {
//     ageRange = 'Infantil A'
// } else if (age >= 8 && age <= 10) {
//     ageRange = 'Infantil B'
// } else if (age >= 11 && age <= 13) {
//     ageRange = 'Juvenil A'
// } else if (age >= 14 && age <= 17) {
//     ageRange = 'Juvenil B'
// } else if (age >= 18) {
//     ageRange = 'Adulto'
// } else {
//     ageRange = '... Idade Inválida!'
// }

// console.log(`O nadador é da categoria ${ageRange}`)

// Exercicio 6

// let day = Number(prompt('Insira o dia:'))

// switch (day){
//     case 1:
//         console.log('Domingo')
//             break
//     case 2:
//         console.log('Segunda')
//             break
//     case 3:
//         console.log('Terca')
//             break
//     case 4:
//         console.log('Quarta')
//             break
//     case 5:
//         console.log('Quinta')
//             break
//     case 6:
//         console.log('Sexta')
//             break
//     case 7:
//         console.log('Sabado')
//             break
// }

// Exercicio 7

// let num1 = Number(prompt('Insira o primeiro valor:'))
// let num2 = Number(prompt('Insira o segundo valor:'))
// let operador = prompt('Insira o segundo valor: +, -, * ou /')

// switch(operador){
//     case '+':
//         console.log(num1 + num2)
//         break
//     case '-':
//         console.log(num1 - num2)
//         break
//     case '*':
//         console.log(num1 * num2)
//         break
//     case '/':
//         console.log(num1 / num2)
//         break
//     default:
//         console.log('Operador incorreto!')
//         break
// }

// Exercicio 8

// let option = Number(prompt('Insira um valor de 1 a 4 para saber a estaçao: '))

// switch(option) {
//     case 1:
//         console.log('Primavera')
//         break
//     case 2:
//         console.log('Verao')
//         break
//     case 3:
//         console.log('Outono')
//         break
//     case 4:
//         console.log('Inverno')
//         break
//     default:
//         console.log('Voce nao selecionou nenhuma das opcoes!')

// }

// Exercicio 9

// let age = Number(prompt('Informe a sua idade: '))

// let ageRange

// if (age >= 0 && age <= 12) {
//     ageRange = 'Criança'
// } else if (age >= 13 && age <= 17) {
//     ageRange = 'Adolescente'
// } else if (age >= 18 && age < 60) {
//     ageRange = 'Adulto'
// } else if (age >= 60 && age < 150) {
//     ageRange = 'Idoso'
// } else {
//     ageRange = 'Idade Inválida'
// }

// switch (ageRange) {
//     case 'Criança':
//         console.log('Voce é uma criança')
//         break
//     case 'Adolescente':
//         console.log('Voce é uma Adolescente')
//         break
//     case 'Adulto':
//         console.log('Voce é uma Adulto')
//         break
//     case 'Idoso':
//         console.log('Voce é uma Idoso')
//         break
//     default:
//         console.log('Idade inválida')
// }

// Exercicio 10

// let peso = Number(prompt('Informe seu peso: '))
// let altura = Number(prompt('Informe sua altura com o ponto depois do primeiro numero: '))

// const imc = peso / (altura * altura);

// let categoria;
// if (imc < 18.5) {
//     categoria = 'Abaixo do peso';
// } else if (imc >= 18.5 && imc < 25) {
//     categoria = 'Peso normal';
// } else if (imc >= 25 && imc < 30) {
//     categoria = 'Sobrepeso';
// } else if (imc >= 30 && imc < 35) {
//     categoria = 'Obesidade grau I';
// } else if (imc >= 35 && imc < 40) {
//     categoria = 'Obesidade grau II';
// } else {
//     categoria = 'Obesidade grau III';
// }
// console.log(`Seu IMC é ${imc} e a categoria é ${categoria}`)