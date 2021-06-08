function solucao(produtos) {
	//seu codigo aqui
    let dadosRespota ={
        totalTop: 0,
        percentual:  0
    }
     
    let faturamentoTotal = 0;
    
    for(let i = 0; i < produtos.length; i++){
        if(produtos[i].preco > 10000){
            dadosRespota.totalTop += produtos[i].preco
        }
        faturamentoTotal += produtos[i].preco
    }
    
    dadosRespota.percentual = (dadosRespota.totalTop/faturamentoTotal)
    console.log(dadosRespota)
}