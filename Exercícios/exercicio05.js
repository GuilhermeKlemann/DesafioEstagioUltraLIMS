// 05 - Escreva um algoritmo para encontrar um único número de um array onde cada número repete três vezes, exceto um:

function numeroUnico(arr, n) {
    for (let i = 0; i < n; i++) {
        let j;
        for (j = 0; j < n; j++)
            if (i != j && arr[i] == arr[j])
                break;
        if (j == n)
            return arr[i];
    }

    return -1;
}

let arr = [5, 3, 4, 3, 5, 5, 3];
let n = arr.length;

console.log(numeroUnico(arr, n));