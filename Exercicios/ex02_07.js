const prompt = require('prompt-sync')();

let velocidade = Number(prompt('qual a velocidade do carro'));
if (velocidade > 80) {console.log('multado');

}else {console.log('não multado');

}
let multa = Number(prompt('qual o valor da multa?'));
let custo = (velocidade - 80) * 7
console.log(`e o custo da multa seria ${custo} R$?`);
