if(joao == andre){
    console.log('EMPATE')
}else if((joao == 'PEDRA' && andre =='TESOURA')|| (joao == 'TESOURA' && andre == 'PAPEL')||(joao == 'PAPEL' && andre =='PEDRA')){
    console.log('JOAO')
}else if((andre == 'PEDRA' && joao == 'TESOURA')||(andre == 'TESOURA' && joao == 'PAPEL')||(andre == 'PAPEL' && joao =='PEDRA')){
    console.log('ANDRE')
}