// EX-9: Repeteix l’exercici anterior però com a funció anònima.

const esTrentaAnonim = function (num1, num2) {
    return num1 === 30 || num2 === 30 || (num1 + num2) === 30;
};

console.log(esTrentaAnonim(10, 20));
