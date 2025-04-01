const prompt = require('prompt-sync')();

let diasDosMeses = prompt("qual o mes?")
switch (diasDosMeses) {
    case 'janeiro':
        console.log('31');
        break
    case 'fevereiro': const prompt = require('prompt-sync')();
        console.log('28');
        break
    case 'março':
        console.log('31');
        break
    case 'abril':
        console.log('30');
        break
    case 'maio':
        console.log('31');
        break
    case 'junho':
        console.log('30');
        break
    case 'julho':
        console.log('31');
        break
    case 'agosto':
        console.log('30');
        break
    case 'setembro':
        console.log('31');
        break
    case 'outubro':
        console.log('30');
        break
    case 'novembro':
        console.log('31');
        break
    case 'dezembro':
        console.log('30');

    default:
        console.log("digite um numero de 1 a 12");

}

