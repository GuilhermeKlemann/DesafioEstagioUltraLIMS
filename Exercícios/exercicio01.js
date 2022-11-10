// 01 - Escreva um algoritmo para encontrar os números faltantes de um array:

function encontrarNumerosFaltantes(arr) {

    let proximoNumero = arr[0]
    const novoArray = []

    for (const i of arr) {
        proximoNumero = proximoNumero + 1

        if (arr.includes(proximoNumero)) {
            continue
        } else {
            novoArray.push(proximoNumero)
        }

    }

    return novoArray

}

let sequenciaNumerica = [1, 2, 3, 6, 7, 8]

console.log(encontrarNumerosFaltantes(sequenciaNumerica))
