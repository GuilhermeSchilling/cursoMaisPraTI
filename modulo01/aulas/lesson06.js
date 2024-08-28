// console.log(10 > 5)
// console.log(10 == '10')
// console.log(10 === 10)
// console.log(10 === '10')
// console.log(10 ==! '10')
// console.log(10 ===! '10')

// console.log((10 < 5) && (10 > 2))
// console.log((10 < 5) || (10 > 2))
// console.log((10 < 5) || !(10 > 2))

// ---------------------------------------------

// var user = 'Guilherme'
// var password = 12345

// authentication = user === 'Guilherme' && password == 12345
// console.log(authentication)

// ---------------------------------------------

// var user = 'Guilherme'
// var password = 12345

// if (user === 'Guilherme' && password === 12345) {
//     console.log('Login efetuado com sucesso!')
// } else {
//     console.log('Usuário ou senha inválidos!')
// }

// ---------------------------------------------

// const grade = 70

// if (grade >=60){
//     console.log('Passou!')
// }  else{
//     console.log('Reprovado!')
// }

// ---------------------------------------------

// var age = 34

// if (age >= 18 && age <= 32 ) {
//     console.log('Pode fazer o curso!')
// } else{
//     console.log('Não pode participar!')
// }

// ---------------------------------------------

// let ternary = (10 < 100) ? 'Verdadeiro' : 'Falso'

// ---------------------------------------------

// entrada = 4
// if( entrada % 2 === 0) {
//     console.log('Par')
// } else{console.log('Impar')
// }

// ---------------------------------------------

// a = 12
// b = 2222
// c = 12311

// if(
//     a > b && a > c){
//         maior = a
//     } else if(b > c && b > a){
//         maior = b
//     } else{
//         (c > a && c > b)
//         maior = c
//     }

//         console.log(maior)

// ---------------------------------------------

// const prompt = require('prompt-sync')()

// let num1 = Number(prompt('Insira o primeiro valor:'))
// let num2 = Number(prompt('Insira o segundo valor:'))
// let operador = prompt('Insira o segundo valor: +, -, * ou /')
// resultado = 0

// if(operador === '+'){
//     resultado = num1 + num2
// } else if(operador === '-'){
//     resultado = num1 - num2
// } else if (operador === '*'){
//     resultado = num1 * num2
// } else if(operador ==='/'){
//     if (num2 ==! 0){
//         resultado = num1 / num2
//     }else (console.log('Erro, divisao por zero!'))
//     }

// console.log(resultado)

// ---------------------------------------------

// let option = 1

// switch(option) {
//     case 1:
//         console.log('Primeira opcao')
//         break
//     case 2:
//         console.log('Segunda opcao')
//         break
//     case 3:
//         console.log('Terceira opcao')
//         break
//     default:
//         console.log('Voce nao selecionou nenhuma das opcoes!')

// }

// --------------------------------------------- ||

// const prompt = require('prompt-sync')()
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

// --------------------------------------------- ||

const prompt = require("prompt-sync")();
let mounth = Number(prompt("Insira o mes:"));
days = 0;
switch (mounth) {
    case 1:
    case 3:
    case 7:
    case 8:
    case 10:
    case 12:
        days = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        days = 30;
        break;
    case 2:
        days = 28;
        break;
    default:
        console.log("Esse nao é um mes valido!");
}
console.log(days);
