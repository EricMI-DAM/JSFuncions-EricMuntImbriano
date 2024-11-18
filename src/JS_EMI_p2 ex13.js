// EX-13: Passa’t dos valors, retorni el que no és null.

const retornaNoNull = (valor1, valor2) => valor1 ?? valor2;

console.log(retornaNoNull(null, "Hola"));
console.log(retornaNoNull("Adeu", null));
