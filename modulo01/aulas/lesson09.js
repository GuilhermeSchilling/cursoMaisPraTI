// Faça a soma dos valores de dentro de um array
// let sumList = [2, 2, 3, 4]
// sum = 0
// for(let i = 0; i < sumList.length; i++){
//     sum += sumList[i]
// }console.log(sum)

// ------------------
// Encontre o maior valor de um array

// let list = [8, 2, 2, 3, 4, 12, 5];
// maxValue = 0;
// count = 0;
// for (let i = 0; i < list.length; i++) {
//     if (list[i] > maxValue) {
//         maxValue = list[i];
//     }
// }
// console.log(maxValue);

// ------------------
// Reverter um array

// let list = [1, 2, 3, 4, 5]
// let newList = []
// let count = list.length

// for (i = count - 1, j = 0; j < count; i--, j++) {
//     newList[j] = list[i]
// }
// console.log(newList);

// ------------------
// Transformar em um novo array somente de numeros pares

// let list = [1, 2, 3, 4, 5, 6]
// let newList = []

// for (i = 0; i< list.length; i++) {
//     if(list[i] % 2 === 0){
//         newList.push(list[i])
//     }
// }console.log(newList)

// ------------------
// Contar ocorrencias de um valor dentro do array

// let list = [1, 2, 2, 3, 3, 3, 4,]
// search = 3
// times = 0
// for (i = 0; i< list.length; i++){
//     if(list[i] === search){
//         times++
//     }
// }
// console.log(times)

// ------------------
// arrays/vetores multidimensionais

// let matriz = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]
// for (lin = 0; lin < matriz.length; lin++) {
//     for (col = 0; col < matriz[lin].length; col++) {
//         console.log(`Elemento na posição [${lin}][${col}]: ${matriz[lin][col]}`)
//     }
// }

// ------------------
// Somar o valor de duas matrizes

// let arr1 = [
//     [1, 1, 1],
//     [1, 1, 1],
//     [1, 1, 1]
// ]
// let arr2 = [
//     [1, 1, 1],
//     [1, 1, 1],
//     [1, 1, 1]
// ]

// let resultado = []
// if(arr1.length !== arr2.length || arr1[0].length !== arr2[0].length){
//     throw new Error('Os arrays devem ter o mesmo tamanho.')
// }

// for(let i = 0; i < arr1.length; i++){
//     let somaLinha = []
//     for(let j = 0; j < arr1[i].length; j++){
//         somaLinha.push(arr1[i][j] + arr2[i][j])
//     }
//     resultado.push(somaLinha)
// }clearInterval
// console.table(resultado)

// ------------------
// Somar a diagonal de uma matriz

let matriz = [
    [2, 1, 1],
    [1, 2, 1],
    [1, 1, 2],
];
soma = 0;
for (let i = 0; i < matriz.length; i++) {
    soma += matriz[i][i];
}
console.log(soma);
