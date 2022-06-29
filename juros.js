import juros from 'readline-sync';

let porcentagem_juros = 0;

console.log('Aplicação de Juros:\n');

let valor_devido = juros.question('Informe o valor devido: R$ ');

if ( valor_devido > 0 ) {
  let qtd_dias_atrasados = juros.question('Informe quantos dias se passaram desde o vencimento do boleto: ');
  
  if (qtd_dias_atrasados > 0){ 
    if (qtd_dias_atrasados > 15){
      porcentagem_juros = 10;
    } else {
      porcentagem_juros = 5;
    }

    let valor_com_juros = ((valor_devido * porcentagem_juros) / 100 + Number(valor_devido));
    
    console.log('\nValor original da dívida: R$ '+valor_devido);
    console.log('Dias atrasados: '+qtd_dias_atrasados);
    console.log('Taxa de Juros: '+porcentagem_juros+'%');
    console.log('Valor total com juros: R$ '+ valor_com_juros);

  } else {
    console.log('Você está em dia');
  } 
} else {
  console.log('O valor da dívida deve ser maior que zero!');
}





