let nomeCompleto = 'Douglas';
let stringInvertida = '';
let tamanho = nomeCompleto.length - 1

while (tamanho >= 0 ) {
    stringInvertida += nomeCompleto[tamanho];
    tamanho--;
}
console.log(stringInvertida);
