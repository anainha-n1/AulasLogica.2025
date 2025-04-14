const prompt = require('prompt-sync')()

function cabecario () {
    console.log('---------------------------------------');
    console.log(`sesi/senai`);
    console.log('---------------------------------------');
}cabecario()

function bomdia () {
    let nome = prompt('qual seu nome?')
    console.log(nome, 'um bom dia para você!');
    
}
bomdia()
bomdia()
bomdia()

function cabecarioescola (nomeescola) {
    console.log('---------------------------------------');
    console.log(nomeescola);
    console.log('---------------------------------------');
}
cabecarioescola('escola')
cabecarioescola(`sesi`)

function somatoria(imparPar) {
    if (imparPar % 2 == 0) {
        console.log('par');
        
    } else {
        console.log("impar");
        
    }
}
somatoria(5)
somatoria(56)

//função com parameetros e retorno
function media(n1, n2) {
 let resultado = (n1 + n2) / 2;
 console.log(resultado);
}
let valor = media(5, 8)

function formatardata(dia, mes, ano) {
    return `${dia}/${mes}/${ano}`;
}

let data = formatardata(16, 7, 2008)
console.log(data);
let data2 = formatardata(8, 4, 80)
console.log(data2);
let data3 = formatardata(9, 9, 2025)
console.log(data3);


