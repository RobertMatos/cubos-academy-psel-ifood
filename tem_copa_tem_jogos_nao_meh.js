function solucao(ano) {
	//seu codigo aqui
    let resto = (ano % 4)
    
    switch(resto){        
        case 0:
            console.log('JOGOS')
        break
        case 2:
            console.log('COPA')
        break
        default:
            console.log('MEH');
    }
    
    
}