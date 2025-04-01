const prompt = require('prompt-sync')()

//operaçoes com variaveis

let num1 = 3;
let num2 = 7;
let soma = num1 + num2;
console.log(soma);

let subtracao = num1 - num2;
console.log(subtracao);

let multiplicacao = num1 * num1;
console.log(multiplicacao);

let divisao = num1 / num2;
console.log|(divisao);

let exponenciacao = num1 ** num2;
console.log(exponenciacao);

//alterando valor variavel

let precoCelular = Number(prompt('qual o preço de celular?'));
let valorDesconto = Number(prompt("qual o desconto?"));
precoCelular = precoCelular - valorDesconto;
console.log(precoCelular);

var numero = 4 / 2;
numero = numero ** 2;
numero = numero * (50 - 20);
console.log('o valor é', numeror);

//interpretando
let numero = Number(prompt('qua o numero'));
dobro = numero * 2
let metade = numero / 2
console.log(`o dobro ${numero} é ${numero} e a sua metade é ${metade}`);

//passo a passo para fazer o que você quer

let horas = Number(prompt('quantidade de horas de cervisso'));
horas = horas *100;
horas = horas *15;
console.log(horas);



