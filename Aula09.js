const prompt = require('prompt-sync')();
//estruturas condicionais aninhadas
//Switch case

let valorCompra = 120;
let clienteVip = true;
if (valorCompra >= 100) {
    if (clienteVip == true) {
        console.log(`você ganhou R$ ${valorCompra * 0.1}`);
    } else {
        console.log(`você ganhou R$ ${desconto}de desconto`);
    }

} else {
    let restante = valorCompra - 100;
    console.log(`compra mais R$ ${restante} e ganhe desconto`);
}


let idade = Number(prompt('sua idade'))
if (idade < 16) {
    console.log('não tem direito ao voto');
} else {
    if (idade >= 18) {
        console.log("obrigatorio");
    }
}


let n1 = Number(prompt('digite um numero '))
let n2 = Number(prompt('digite outro numero '))
let op = prompt("digite o operador (+-/* **): ")
switch (ip) {
    case '+':
        console.log(n1 + n2);
        
        break;
    case '-':
        console.log(n1 - n2);
        break
        case '/':
            console.log(n1/n2 );
            case '*':
                break
            console.log(n1 * n2);      
            
        
}