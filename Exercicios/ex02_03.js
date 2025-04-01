const prompt = require('prompt-sync')();

let num = Number(prompt('qual o numero?'));
if (num % 2 == 0) {
    console.log("o numero é par");
} else {
    console.log("o numero é impar");
}