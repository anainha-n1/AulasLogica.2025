const prompt = require('prompt-sync')();
//estrutura condicional composta e encadeada
//operadores logicos
//&& - e
//|| - ou 
//! - não

let a = 2;
let b = 3;
let c = 5;
console.log(a > 2 && b < 2);
console.log(a > 1 && b < 2);
console.log(a > 1 && b < 4);

console.log(a > 2 || b < 2);
console.log(a > 1 || b < 2);
console.log(a > 1 || b < 4);
let alttura = Number(prompt("digite sua altura"))
let peso = Number(prompt('digite seu numero'))
let IMC = peso / (alttura ** 2)
if (IMC < 18.5) 
    console.log('vc esta abaixo do peso')

let lado1 = Number(prompt("digite o lado 1 = "))
let lado2 = Number(prompt("digite o lado 2 = "))
let lado3 = Number(prompt("digite o lado 3 = "))
if (lado1 == lado2 && lado1 == lado3 && lado3 == lado2) {
    console.log("o triangulo é equilátero");
} else if (lado1 != lado2 && lado1 != lado3 && lado3 != lado2) {
    console.log("escaleno");
} else {
    console.log("isoseles"); 
}


let vendasTotal = Number(prompt('qual foi a venda total?'));
let horas = Number(prompt('qual foi a wuantidade de horas?'));
if (vendasTotal >= 5000 || horas >= 40  ) {
   console.log('tem direito ao bonus');
    
}

let letra = prompt('qual a letra?')
if (letra == 'a', letra == 'e', letra == 'i', letra == 'o', letra == 'u') {
    console.log('vogal');
    }

    
