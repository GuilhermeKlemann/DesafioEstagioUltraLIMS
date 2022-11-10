// 03 - Escreva um algoritmo para encontrar três números consecutivos de um array que somados o resultado é igual a um outro número fornecido:

let n = [2, 7, 7, 1, 8, 2, 7, 8, 7];
const somaTotal = 16;


function somarConsecutivos(n) {    
    if (n[0] + n[1] + n[2] === somaTotal) {
        console.log(`${n[0]} + ${n[1]} + ${n[2]} = `, n[0] + n[1] + n[2])
    
    } else {
        console.log(`${n[0]} + ${n[1]} + ${n[2]} = ${n[0] + n[1] + n[2]} (Número diferente de 16.)`)
    }

    if (n[1] + n[2] + n[3] === somaTotal) {
        console.log(`${n[1]} + ${n[2]} + ${n[3]} = `, n[1] + n[2] + n[3])
    } else {
        console.log(`${n[1]} + ${n[2]} + ${n[3]} = ${n[1] + n[2] + n[3]} (Número diferente de 16.)`)
    }

    if (n[2] + n[3] + n[4] === somaTotal) {
        console.log(`${n[2]} + ${n[3]} + ${n[4]} = `, n[2] + n[3] + n[4])
    } else {
        console.log(`${n[2]} + ${n[3]} + ${n[4]} = = ${n[2] + n[3] + n[4]} (Número diferente de 16.)`)
    }

    if (n[3] + n[4] + n[5] === somaTotal) {
        console.log(`${n[3]} + ${n[4]} + ${n[5]} = `, n[3] + n[4] + n[5])
    } else {
        console.log(`${n[3]} + ${n[4]} + ${n[5]} = ${n[3] + n[4] + n[5]} (Número diferente de 16.)`)
    }

    if (n[4] + n[5] + n[6] === somaTotal) {
        console.log(`${n[4]} + ${n[5]} + ${n[6]} = `, n[4] + n[5] + n[6])
    } else {
        console.log(`${n[4]} + ${n[5]} + ${n[6]} = ${n[4] + n[5] + n[6]} (Número diferente de 16.)`)
    }

    if (n[5] + n[6] + n[7] === somaTotal) {
        console.log(`${n[5]} + ${n[6]} + ${n[7]} = `, n[5] + n[6] + n[7])
    } else {
        console.log(`${n[5]} + ${n[6]} + ${n[7]} = ${n[5] + n[6] + n[7]} (Número diferente de 16.)`)
    }

    if (n[6] + n[7] + n[8] === somaTotal) {
        console.log(`${n[6]} + ${n[7]} + ${n[8]} = `, n[6] + n[7] + n[8])
    } else {
        console.log(`${n[6]} + ${n[7]} + ${n[8]} = ${n[6] + n[7] + n[8]} (Número diferente de 16.)`)
    }

    console.log("Fim!")
}

console.log(somarConsecutivos(n))