const prompt = require('prompt-sync')();
let total = 0
let qtdepares = 0
let qtdeimpares = 0 

while (true) {
    let valor = Number(prompt('Digite o valor do produto(0, para encerrar'))

    if (valor == 0) {
        break;

    } else {
        total = valor + total
    }
    if (numero % 2 == 0)
        qtdepares++
    }
 
    console.log(`quantidade de impares ${qtdeimpares}`);
   console.log(`quantidade de pares  R$ ${qtdepares}`);
   