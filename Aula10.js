const prompt = require('prompt-sync')();


let resposta = 'S';
while (resposta == 'S') {
    console.log('vc está dentro do bloco');
    console.log('deseja continuar? S/N');

}

console.log('FIM');


let senhaSECRETA = 'senai'
let senhaDIGITADA
while (senhaSECRETA != senhaDIGITADA) {
    console.log('descubra a senha ');
    senhaDIGITADA = prompt('qual a senha?')
}
console.log('fim');

//ex4
//posso deixar meu laço executando sem uma condição específica, apenas 
//com while

let total = 0
let qtde = 0

while (true) {
    let valor = Number(prompt('Digite o valor do produto(0, para encerrar'))

    if (valor == 0) {
        break;

    } else {
        total = valor + total
        qtde++
    }
}  
    console.log(`vc comprou no total ${qtde} produtos`);
   console.log(`valor total da compra  R$ ${total.toFixed(2)}`);
   