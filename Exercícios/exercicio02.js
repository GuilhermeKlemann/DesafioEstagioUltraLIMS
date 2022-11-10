// 02 - Escreva um algoritmo para encontrar três números consecutivos de um array que somados o resultado é igual a zero:

function somaIgualAZero(arr) {
    let novoArray = []

    for (let i = 0; i < arr.length; i++) {
        novoArray.push(arr[i])

        if (novoArray.length === 3) {
            const sum = novoArray.reduce((e, current, arr) => {
                return current + e
            }, 0)

            if(sum === 0) {
                return novoArray
            } else {
                novoArray = []
            }
        }
    }
}

let sequenciaNumerica = [-1, 0, 1, 2, -1, -4]

console.log(somaIgualAZero(sequenciaNumerica))