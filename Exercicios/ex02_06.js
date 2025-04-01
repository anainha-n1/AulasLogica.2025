const prompt = require('prompt-sync')();
let numero = Number(prompt('qual é o numero?'))
let numero2 = Number(prompt('qual é o segundo numero?'))
if (numero == numero2) {console.log('igual');
} else {console.log('diferente');
}