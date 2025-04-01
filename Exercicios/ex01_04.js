const prompt = require('prompt-sync')();
let note = parseInt(prompt('qual a primeira nota?'))
let note2 = parseInt(prompt('qual a segunda nota?'))
let media = (note + note2) / 2
console.log(media)

