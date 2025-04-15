function senhAleatoria(qtdCaracteres) {
    let listaCaracteres = ['!', "a", 5, 'R', "$", "#"]
    let senha = '';
    
    for (let x = 1; x <= qtdCaracteres; x++){
        let posSorteada = Math.floor(Math.random() * listaCaracteres.length)
        senha += listaCaracteres[posSorteada];
    }
    return senha;
}
console.log(senhAleatoria(50));
