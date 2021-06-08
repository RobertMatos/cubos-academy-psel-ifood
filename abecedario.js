function solucao(letra, palavras) {
	//seu codigo aqui
    let perdas = 0
    for(let i = 0; i < palavras.length; i++){
        if(palavras[i][0] != letra){
            perdas++
        }
    }
    console.log(perdas)
}