//escopo de variaveis
//variavel global pode ser acessada em qualquer lugar
//variavel local so pode ser acessada dentro do bloco

//utilizando variaveis local
function nomeescola(){
    let escola = "Sesi"
    console.log(`valor fora da função ${escola}`);   
}

let escola = "senai"
console.log(`valor fora da função ${escola}`);
nomeescola();
console.log(`valor após da função ${escola}`);

//utiliazando variaveis global
var escola2 = "senai"
function nomeescola2(){
     escola = "Sesi"
    console.log(`valor fora da função ${escola2}`);   
}

console.log(`valor fora da função ${escola2}`);
nomeescola2();
console.log(`valor após da função ${escola2}`);