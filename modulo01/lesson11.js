// lista = ['a', 'd', 'c', 'b' ]

// function ordenaArray (arr){
//     let ordenado = arr.sort()
//     return ordenado
// }

// console.log(ordenaArray(lista))

// ----------------------------------------
// Funções anônimas

// let teste = function (){
//     console.log('Ola, mundo!')
// }
// teste()

// function showFunction(sucessCallback, errorCallback){
//     if(false){
//         sucessCallback('Requisicao recebida')
//     }else{
//         errorCallback('Erro na requisicao')
//     }
// }


// let sucessCallback = function(message){
//     console.log(message)
// }

// let errorCallback = (message) => {
//     console.error(message)
// }

// showFunction(sucessCallback,errorCallback)

// ----------------------------------------
// 1. Soma dos Elementos de um Array

// let sumList = [2, 2, 3, 4]
// let sumList2 = [1, 1, 1, 1]


// function arraySum (arr){
//     sum = 0
//     for(let i = 0; i < sumList.length; i++){
//         sum += arr[i]
//     }
//     return sum
// }
// console.log(arraySum(sumList))
// console.log(arraySum(sumList2))

// --------------------------------------
//2. Encontre o Maior Número em um Array

// let list = [8, 2, 2, 3, 4, 12, 5]

// function bigger(arr) {
//     maxValue = 0
//     count = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > maxValue) {
//             maxValue = arr[i]
//         }
//     }
//     return maxValue
// }

// console.log(bigger(list))

// --------------------------------------
//3. Reverter um Array

// let list = [1, 2, 3, 4, 5]

// function arrReverse(arr) {
//     let newList = []
//     let count = arr.length

//     for (i = count - 1, j = 0; j < count; i--, j++) {
//         newList[j] = arr[i]
//     }
//     return newList
// }

// console.log(arrReverse(list))

// --------------------------------------
//4. Criem um novo array contendo apenas os números pares

// let list = [1, 2, 3, 4, 5, 6]

// function pairArr(arr) {
//     let newList = []

//     for (i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             newList.push(arr[i])
//         }
//     }
//     return newList
// }

// console.log(pairArr(list))


// --------------------------------------
//5. Contar Ocorrências de um Valor

// let list = [1, 2, 2, 3, 3, 3, 4,]

// function ocorrencias(arr) {
//     search = 3
//     times = 0
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i] === search) {
//             times++
//         }
//     }
//     return times
// }
// console.log(ocorrencias(list))

// ---------------------------------------------------------------
// Funcoes prontas do JS

// let nome = 'Guilherme'
// let title = 'Equipe Olimpica'

// console.log('Guilherme'.length) //comprimento
// console.log('Guilherme'.charAt(0)) //seleciona pelo indice
// console.log(nome.indexOf('u')) //mostra o indice da letra
// console.log(nome.replace('Gui', 'Ja'))
// console.log(title.substr(7, 8))  //numero de caracteres cortados / numero de caracteres a serem mostrados apos o corte
// console.log(nome.toUpperCase())
// console.log(nome.toLowerCase())
// console.log('-' + title.trim() + '-') //retira o espaco em branco das extremidades

// Funcoes matematicas

// console.log(Math.ceil(100.73)) //arrendonda para cima
// console.log(Math.floor(100.73)) //arrendonda para baixo
// console.log(Math.round(100.73)) //arrendonda para o mais proximo
// console.log(Math.sqrt(100)) // raiz quadrada
// console.log(Math.pow(100, 2)) // potencia
// console.log(Math.cbrt(100)) //raiz cubica
// console.log(Math.abs(100.20)) //absoluto
// console.log(Math.random() * 100) //numero aleatorio de 0 a 100

//Datas

// let date = new Date()

// console.log(date.getDate())
// console.log(date.getMonth() + 1)
// console.log(date.getFullYear())
// date.setDate(date.getDay() + 720)  //alterar data
// console.log(date.toString())

// ------------------------

// let date1 = new Date(2024, 7, 6)
// let date2 = new Date(2023, 7, 6)

// console.log(date1.toString())

// console.log(date1.getTime())
// console.log(date2.getTime())

// let diferencaMilisegundosEntreDatas = Math.abs(date1.getTime() - date2.getTime())
// console.log(diferencaMilisegundosEntreDatas)

// let milisegundosPorDia = (1 * 24 * 60 *60 * 1000)
// console.log(milisegundosPorDia)
// console.log(`A diferenca entre as datas é ${Math.ceil(diferencaMilisegundosEntreDatas/milisegundosPorDia)} dias!`)


// ------------------------------------------------------------------
// Mudar transformar o dia da semana para portugues

// let dataAtual = new Date();

//     let diaSem = dataAtual.getDay();

//     let diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'];

// console.log(diasDaSemana[diaSem])


// function dataAtualFormatada(){
//     var data = new Date(),
//         dia  = data.getDate().toString().padStart(2, '0'),
//         mes  = (data.getMonth()+1).toString().padStart(2, '0'), //+1 pois no getMonth Janeiro começa com zero.
//         ano  = data.getFullYear();
//     return dia+"/"+mes+"/"+ano;
// }
// console.log(dataAtualFormatada())

// ----------------------------------------------------------------------
//Inverter uma string

// function reverseString(str) {
//     return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0)
// }
// console.log(reverseString("hello"))

// ----------------------------------------------------------------------
//Contar vogais

// function vogais (a){
//     let contadorDeVogais = 0
//     for (let char of a) {
//         if ('aeiou'.includes(char)) contadorDeVogais++
//     }
//     return contadorDeVogais
// }

// console.log(vogais('mamama'))

// ----------------------------------------------------------------------
//Gerar número aleatório

// function randonNumber (){
//     a = 0
//     a = Math.random() * 100
//     return a
// }
// console.log(randonNumber())

// ----------------------------------------------------------------------
//Dias entre duas datas

// let date1 = new Date(2024, 7, 6)
// let date2 = new Date(2023, 7, 6)

// function daysBetween(a, b){
//     let milisegundosPorDia = (1 * 24 * 60 *60 * 1000)
//     let diferencaMilisegundosEntreDatas = Math.abs(a.getTime() - b.getTime())
//     diferenca = Math.ceil(diferencaMilisegundosEntreDatas/milisegundosPorDia)
//     return diferenca
// }
// console.log(daysBetween(date1, date2))

// ----------------------------------------------------------------------
//Formatar data

// function dataAtualFormatada(){
//     var data = new Date(),
//         dia  = data.getDate().toString().padStart(2, '0'),
//         mes  = (data.getMonth()+1).toString().padStart(2, '0'), //+1 pois no getMonth Janeiro começa com zero.
//         ano  = data.getFullYear();
//     return dia+"/"+mes+"/"+ano;
// }
// console.log(dataAtualFormatada())