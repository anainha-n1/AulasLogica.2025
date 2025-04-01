const prompt = require('prompt-sync')

//criando a primeira variável
//uma variável serve para armazenar uma informação/valor
//crie um espaço com o nome curso e receba o valor 'desenvolvimento de sistemas'
var curso = 'desenvolvimento de sistemas';

//exibindo o conteudo da variavel 
console.log('curso'); //para imprimir uma variável, não se coloca ''  ''
 console.log(curso);//jeito correto de se usar uma variável
 console.log('curso',curso);

//criando e atribuindo valores a uma varável
var idade = 15; //inteira //integer
var temperatura = 24.5; //real // float
var neme = 'ana'; //string

console.log('olá', neme, 'você tem ',idade, 'anos')
console.log('está cursando', curso, 'hoje faz', temperatura, '°C')

console.log('olá' + neme + 'você tem ' +idade + 'anos')
console.log('está cursando' + curso + 'hoje faz' + temperatura + '°C')

//template String
//utilizo a crase` ` para criar uma string
//para colocar variaveis dentro da string, utilizo $(variavel)
console.log(`olá, ${neme} você tem ${idade} anos
            esta cursando ${curso} hoje faz ${temperatura}°c`)

//declarando uma variavel logica/bolean/boleando (true/false)
var podedirgit = true;
var estachovendo = false;


//declarando uma variavel nula 
var escola;

//exercicio
//invalidos =média; nome completo; var; true; 9dade; console.

let cidade = 'andradina'
var turma = '2°B'
const ano = 2025

console.log(turma);
turma = '3°B'//reatribuir o valor de uma variavel
console.log(turma);
// ano = 2026
//ano = 2026; //não podemos reatribuir valor a uma constante


let _nome = 'Ayrton'
let _idade =36
let _peso = 75.5
console.log (_nome, _idade, _peso,);

 _nome = prompt('qual é o nome?')
 _idade = prompt('qual é a idade?')
 _peso = prompt('qual é o peso?')
 console.log(_nome, _idade, _peso)

//criem 2 variaveis num1 e num2 e recebam as informaçoes pelo prompt

var num1 = prompt('digite o primeiro 1n°');
var num2 = prompt('digite o numero 2n°');
console.log (num1 + num2);

console.log(typeof num1);  //string
num1 = Number(num1);      //convertendo a variavel do tipo string para Number
console.log(typeof num1); //Number

//receba uma informação já convertendo se tipo de dados 
let nr1 = Number (prompt('digite o 2n°')); //Number
let nr2 = Number (prompt('digite o 2n°')); //Number
console.log (nrl1 + nrl2)

//convertendo os dados de uma variavel 
nr1 = '100.14'; //string
nr1 = Number ('100.14'); //convertendo string para integer
nr1 = parseFloat ('100'); //converter string para float 100.00
nr1 = String(100.14); //convertendo um Number para string

_nome = prompt('qual é o nome?');
 _idade = parseInt(prompt('qual é a idade?'));
 _peso = parseFloat(prompt('qual é o peso?'));
 console.log(_nome, _idade, _peso,);

 //exercicios
 let nomeAluno = 'nica';
 let altura =  150;
 let anoAtual = 2025

 let nomeProfessor = prompt('adicione o nome do professor');
 let materia = prompt('adicione a materia');
 let anoIngresso = prompt('adicione o ano de ingresso do professor');

 


