let faturamentos = {
    'SP': 67836.43,
    'RJ': 36678.66,
    'MG': 29229.88,
    'ES': 27165.48,
    'Outros': 19849.53
};

let soma = 0;

for (let estado in faturamentos) {
    soma = soma + faturamentos[estado]
}


for (let estado in faturamentos) {
    valor = faturamentos[estado];
    let porcentual = (valor / soma) * 100;

    console.log(`${estado}: ${valor}  [${porcentual.toFixed(2)}%]`)
}
