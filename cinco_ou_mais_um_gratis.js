function solucao(precos) {
    //seu codigo aqui
   let itemMenorPrecoIndex = 0, menorPreco = Number.MAX_VALUE, valor = 0
     
   if(precos.length >= 5){       
       for(let i =0; i < precos.length; i++){
           if(precos[i] < menorPreco){
               menorPreco = precos[i]         
               itemMenorPrecoIndex = i
           }         
       }
       precos[itemMenorPrecoIndex] = 0
       for(let i =0; i < precos.length; i++){
           valor += precos[i]
       }
       console.log(valor)
   } else {
       for(let i =0; i < precos.length; i++){
           valor += precos[i]
        }
        console.log(valor)
   }
   
}
