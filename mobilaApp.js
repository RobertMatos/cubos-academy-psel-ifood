function solucao(tempo, distancia) {
	//seu codigo aqui
    let valorCorrida
    if(tempo < 5){
        valorCorrida = 600 
    }else if ((tempo >= 5) && (tempo <=60)){
        valorCorrida = ((tempo * 100) + (distancia* 50))
    }else if(tempo > 60){
        if(distancia < 100){
            valorCorrida = (distancia* 200)
        }else if(distancia >= 100){
            valorCorrida = (distancia * 150)
        }
    }
    console.log(valorCorrida)
}