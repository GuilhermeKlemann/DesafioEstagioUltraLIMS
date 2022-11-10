// 04 - Escreva um algoritmo para encontrar um único número de um array que não se repita duas vezes:

let listaDeNumeros = [5, 3, 4, 3, 4]

function numeroUnico(n) {
    var n = 0;

    for(i = 0; i < listaDeNumeros.length; i++) {
        n = n ^ listaDeNumeros[i];
    }

    return n
}

console.log(numeroUnico(listaDeNumeros))