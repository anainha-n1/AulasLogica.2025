const prompt = require('prompt-sync')();

let num1 = Number (prompt('digite o numero')); 
let antecesor = num1 - 1;
let sucessor = num1 + 1;
console.log(`se o numero for ${num1} seu antecessor sera ${antecesor} e seu ${sucessor}`);


