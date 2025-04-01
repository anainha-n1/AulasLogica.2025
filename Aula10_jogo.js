const prompt = require('prompt-sync')();
console.log('JOGO DO ADIVINHA');


let nrSecreto = Math.floor(Math.random() *100) + 1;

let acertou = false;

while (acertou == false) {
    let chute = Number(prompt('digite um numero entre 1 e 100:' ))

 if (chute == nrSecreto){
  console.log(v='voce acertou!');
  acertou = true;
 } else if ( chute > nrSecreto){
    console.log(`voce chutou ${chute}, tente um numero menor`);
    
 } else if ( chute < nrSecreto){
    console.log(`voce chutou ${chute}, tente um numero maior`);
    
 }
}

