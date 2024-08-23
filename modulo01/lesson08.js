const prompt = require('prompt-sync')()
// const num1 = Number(prompt('Digite um numero: '))

// if(num1 > 0){
//     console.log('O numer informado é positivo!')
// } else if (num1 <0 ){
//     console.log('O numero informado é negativo!')
// } else if (num1 ===0){
//     console.log('O numero é igual a zero!')
// }else{
//     console.log('Erro! Informe um numero!')
// }

// --------------------------

// const year = Number(prompt('Digite um numero: '))

// if ((year % 4 === 0 && year % 100 !== 0) || (year % 4 === 0)){
//     console.log(`O ano ${year} é bissexto`)
// } else{
//     console.log(`${year} não é um ano bissexto`)
// }

// --------------------------

// let grade1 = Number(prompt('Informe a primeira nota: '))
// let grade2 = Number(prompt('Informe a segunda nota: '))
// let grade3 = Number(prompt('Informe a terceira nota: '))
// let concept = ''

// let avg = (grade1 + grade2 + grade3)/3

// if(avg >= 90){
//     console.log(`A média das notas é ${avg.toFixed(2)} `)
//     concept = 'A'
// } else if(avg <= 80){
//     console.log(`A média das notas é ${avg.toFixed(2)} `)
//     concept = 'B'
// }else{
//     console.log('É outra nota!')
// }

// console.log('O conceito do aluno é: ' + concept)

// --------------------------

// let age = Number(prompt('Informe a sua idade: '))

// let ageRange

// if (age >= 0 && age <= 12) {
//     ageRange = 'Criança'
// } else if (age >= 13 && age <= 17) {
//     ageRange = 'Adolescente'
// } else if (age >= 18 && age <= 60) {
//     ageRange = 'Adulto'
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
//     default:
//         console.log('Idade inválida')
// }

// --------------------------

// let num1 = Number(prompt('Informe o primeiro valor: '))
// let num2 = Number(prompt('Informe o segundo valor: '))

// let a = num1
// let b = num2

// do {
//     let temp = b
//     b = a % b
//     a = temp
// } while (b !== 0)

// const MDC = a

// console.log(`O maior divisor comum de ${num1} e ${num2} é ${MDC}`)

// --------------------------

// let count = 0
// let num = 101

// do {
//     let primo = 0
//     for (let i = 1; i <= num; i++) {
//         if (num % i === 0) {
//             primo++
//         }
//     }

//     if (primo ===2) {
//         console.log(num)
//         count++
//     }

//     num++
// } while (count < 50)


let carros = Array()
carros[0] = 'Civic'
carros[1] = 'Uno'
carros[2] = 10
carros[3] = true
carros['Guilherme'] = '10'

let motos = Array('CBR', 'Ninja', 10)

let livros = Array('Senhor dos Aneis', 'O hobbit', 'Harry Potter')


// livros.splice(2)
// livros.push('Sherlock Holmes')
// livros.unshift('1984')
// livros.pop()
// livros.shift()

// console.log(carros)
// console.log(carros[2])

// console.log(motos)
// console.log(motos[2])

console.log(livros)
