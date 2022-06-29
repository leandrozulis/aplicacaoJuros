import juros from 'readline-sync';

console.log('Aplicação de Juros:\n');

let valor_devido = juros.question('Informe o valor devido: R$ ');
let qtd_dias_atrasados = juros.question('Informe quantos dias se passaram desde o vencimento do boleto: ');

let porcentagem_juros = (qtd_dias_atrasados > 15) ? 10 : 5;

let valor_com_juros = ((valor_devido * porcentagem_juros) / 100 + Number(valor_devido));

console.log('\nValor original da dívida: R$ '+valor_devido);
console.log('Dias atrasados: '+qtd_dias_atrasados);
console.log('Taxa de Juros: '+porcentagem_juros+'%');
console.log('Valor total com juros: R$ '+ valor_com_juros);
