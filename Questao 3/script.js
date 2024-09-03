let faturamentoDiario = {
    '01/09': 300.00,
    '02/09': 450.00,
    '05/09': 375.45,
    '06/09': 412.51,
    '07/09': 789.14,
    '08/09': 771.74,
    '09/09': 900.00,
    '12/09': 978.32,
    '13/09': 130.00,
    '14/09': 178.94,
    '15/09': 1000.00,
    '16/09': 3576.10,
    '19/09': 78.30,
    '20/09': 987.32,
    '21/09': 2782.14,
    '22/09': 2687.00,
    '23/09': 15789.00,
    '26/09': 287.34,
    '27/09': 852.14,
    '28/09': 987.65,
    '29/09': 156.78,
    '30/09': 4071.30,
};

let menorValor = Infinity;
let maiorValor = -Infinity;
let ValorTotal = 0;
let quantidadeObjeto = 0;
let numeroDeDias = 0;

for (let dia in faturamentoDiario) {
    ValorTotal += faturamentoDiario[dia];
    quantidadeObjeto++
}

let media = ValorTotal / quantidadeObjeto

for (let dia in faturamentoDiario) {
    valor = faturamentoDiario[dia];

    if (valor < menorValor) {
        menorValor = valor;
    }

    if (valor > maiorValor) {
        maiorValor = valor;
    }

    if (valor > media) {
        numeroDeDias++
    }
    
}

console.log(`Maior Valor: R$${maiorValor}`);
console.log(`Menor Valor: R$${menorValor}`);
console.log(`Número de dias com faturamento acima da média: ${numeroDeDias}`);


