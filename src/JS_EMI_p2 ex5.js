// EX-5: Passa’t un String, retorni el número de vocals que té

function comptarVocals(cadena) {
    let vocals = cadena.match(/[aeiouáéíóúü]/gi);
    return vocals ? vocals.length : 0;
}

console.log(comptarVocals("Hola com estàs"));
