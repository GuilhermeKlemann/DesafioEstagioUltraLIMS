// 06 - Escreva um algoritmo que receba um número e que a partir deste número construa um array com a sequência Fibonacci e com o número de elementos sendo o informado:

var n = 6;
      
var Fibonacci = new Array(n); 

Fibonacci.fill(0);   

Fibonacci[0] = 1;

Fibonacci[1] = 1;  
  
for(let i = 2; i < n; i++) {
    Fibonacci[i] = Fibonacci[i-1] + Fibonacci[i-2];  
}

console.log(Fibonacci);