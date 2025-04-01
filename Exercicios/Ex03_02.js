const prompt = require('prompt-sync')();
let anoAtual =  Number(prompt('qual é o ano atual?'))
let nascimento = Number(prompt('qual é o ano de nascimento?'))
let idade1 = anoAtual - nascimento
if (idade1 < 10) {
    console.log('criança')
}else {
    if(idade1 >= 18 && idade1 <= 59) {
        console.log('adulto');
        }else {console.log('idoso')}
}
console.log(idade1);
