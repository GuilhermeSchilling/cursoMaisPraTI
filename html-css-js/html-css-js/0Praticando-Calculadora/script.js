function inserir(valor){
    let tela = document.formulario.tela
    tela.value += valor
    console.log(tela.value)
}

function isOperator(char){
    return['+', '-','/', '*'].includes(char)
}