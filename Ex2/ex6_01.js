const prompt = require('prompt-sync')();

let filminhos = ['rei leão', 'monstros S.A', 'rio', 'Moana', 'branca de neve', 'enrrolados', 'alice no pais das maravilhas'] 
console.log(filminhos[0]);

console.log(filminhos[3]);

filminhos.splice(4, 0, 'encantada')
console.log(filminhos)

filminhos[6] = 'pequena sereia'
console.log(filminhos);

filminhos.slice("turma da monica")
console.log(filminhos);

filminhos.splice(5, 0, 'frozem')
console.log(filminhos);

filminhos.splice(0, 1);
console.log(filminhos);

filminhos.pop(1, 0,)
console.log();
console.log(filminhos);

console.log(filminhos.slice(0, 3));

console.log(filminhos.slice(-4));

console.log(filminhos.length);

filminhos.reverce()

console.log(filminhos);












