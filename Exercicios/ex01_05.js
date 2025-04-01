const prompt = require('prompt-sync')();
let metros = Number(prompt('digite uma medida em metros'));
let cm = metros *100;
let mm = metros *1000;
let km = metros / 1000;
console.log(`${metros}m é ${cm}cm, ${mm}mm e ${km}km`);
