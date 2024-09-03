let contador = 1;
let numero1 = 0;
let numero2 = 1;
let indice = 14;
let pertence = 377;
let encontrado = false;

console.log(numero1);
console.log(numero2);

if (numero1 === pertence || numero2 === pertence) {
    encontrado = true;
}

while (contador < indice) {
    let numero3 = numero1 + numero2;
    console.log(numero3);

    if (numero3 === pertence) {
        encontrado = true;
    }

    numero1 = numero2;
    numero2 = numero3;
    contador++;
}

if(encontrado) {
    console.log(`O número: ${pertence} pertence à sequência de fibonacci`)
} else {
    console.log(`O número: ${pertence} não pertence á sequência de fibonacci dentro do limite fornecido.`)
}



