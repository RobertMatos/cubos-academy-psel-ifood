function solucao(obj) {
	
    if((obj.temIngresso == false)||((obj.idade < obj.censura) && (obj.estaComPais == false))){
        console.log('ACESSO NEGADO')
    }else if((obj.temIngresso == true)&&((obj.idade < 18) || (obj.temCarteirinha == true))){
        console.log('MEIA')
    }else if((obj.temIngresso == true)){
        console.log('INTEIRA')
    }

}
