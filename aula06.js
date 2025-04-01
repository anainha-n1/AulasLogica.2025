const prompt = require('prompt-sync')();

//declarando variavel sem dados 
let nota;
//declarando variavel com informação
let nome = 'ana';

//retribuindo um valor a variavel
nome = 'ana';
nota = 8.5;

//entrada de dados no nosso programa
let sobrenome = prompt('adicione seu sobrenome');
let nota1 = Number (prompt('digite a nota da 1° prova'));
let nota2 = Number (prompt('digite a nota da 2° prova'));

//processamento dos dados
let media = (nota1 + nota2) / 2;
let nomeCompleto = nome +'' + sobrenome;
let nomeCompleto2 = `${nome} ${sobrenome}`;
let idade = prompt('digite sua idade');
let idadeNumero = parseInt(idade);

//saida de dados 
console.log('---relatorio final---');
console.log(`o seu nome é: ${nomeCompleto} \n sua idade ${idade}`);
console.log(`sua medida é: ${medida} `);

let n = 0; //0
n = n + 1; //1
n = n + 1; //2
n = n + 1; //3
n += 1;    //4
n ++;      //5
n += 3;    //8
n --;      //7
n = - 1;   //6
n -= 2;    //4


