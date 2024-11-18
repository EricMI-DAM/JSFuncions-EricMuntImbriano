// EX-8: Passa’t dos enters, retornar true si un d’ells és igual a 30 o si la seva suma és igual a 30.

function esTrenta(num1, num2) {
    return num1 === 30 || num2 === 30 || (num1 + num2) === 30;
}

console.log(esTrenta(10, 20))
console.log(esTrenta(17, 30))
console.log(esTrenta(11, 22))
