const prompt = require('prompt-sync')()

for (let contador = 1; contador <= 5; contador++) {
    console.log(contador);

}

for (let contador = 5; contador <= 50; contador++) {
    console.log(contador);
}

console.log('entregando os computadores');
for (let nr = 1; nr < 32; nr) {
    let nome = prompt(`quem é o n° ${nr}: `)
    let presente = prompt(`o/a ${nome}`)
    
}



//Tabuada com for
let nr = 6;
for (let contador = 1; contador <= 10; contador++) {
    console.log(`${nr} X ${contador} = ${nr * contador}`);
    
    
}