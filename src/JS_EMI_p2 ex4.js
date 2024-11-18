// EX-4: Declara una variable dins d’una funció i mostra el seu valor fora d’aquesta. Què passa? Perquè?

function declararVariable() {
    let variableLocal = "Això és local!";
    console.log(variableLocal);
}

declararVariable();
console.log(variableLocal);
    // Surt error perque una variable amb "let" dins d'una funció no es accesible fora d'ella.
    // alcance local ("scope")
