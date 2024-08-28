// let thingsList = Array()
// thingsList['hardware'] = Array()
// thingsList['fruits'] = Array()
// thingsList['people'] = Array('Aristóteles', 'Tolkien')

// thingsList['hardware'][0] = 'Notebook'
// thingsList['hardware'][1] = 'Mouse'
// thingsList['hardware'][2] = 'Teclado'
// thingsList['fruits'][0] = 'Laranja'
// thingsList['fruits'][1] = 'Maça'

// console.table(thingsList)

//---------------------------

// let fruitsList = []

// fruitsList[0] = 'Maça'
// fruitsList[1] = 'Laranja'
// fruitsList[2] = 'Bergamota'
// fruitsList[3] = 'Banana'

// fruitsList.sort()
// console.log(fruitsList)

// let index = fruitsList.indexOf('Banana')
// console.log(fruitsList.indexOf('Banana'))

// if(index === -1){
//     console.log('Elemento nao existe!')
// }else{
//     console.log(`Elemento existe e esta na posiçao ${index}`)
// }

//---------------------------

// let numberList = []

// numberList[0] = 4
// numberList[1] = 2
// numberList[2] = 1
// numberList[3] = 5

// console.log(numberList.sort((a, b) => a - b))

//---------------------------

// function calculaLandArea (num1, num2){
//     let area = num1 * num2
//     return area
// }
// let width = 50
// let height = 100

// let total = calculaLandArea(width, height)

// console.log(`A area possui ${total} metros quadrados`)

//---------------------------

lista = ["a", "d", "c", "b"];

function ordenaArray(arr) {
    let ordenado = arr.sort();
    return ordenado;
}

console.log(ordenaArray(lista));
