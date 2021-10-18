const prompt = require('prompt-sync')();

function isPerfect(userNumber) {
    let suma = 0;
    for (let i = 0; i < userNumber; i++) {
        if (userNumber % i === 0) {
            suma += i;
        }
    }
    if (suma === userNumber) {
        return true;
    } else {
        return false;
    }
}

let userNumber = parseInt(prompt('Ingresa un número: '));
let perfectNumbers = [];
for (let i = 1; i < userNumber; i++) {
    if (isPerfect(i)) {
        perfectNumbers.push(i);
    }
}

if (!perfectNumbers.length) {
    console.log('No se encontraron números perfectos menores a ' + userNumber);
} else {
    console.log('Los números perfectos menores a ' + userNumber + " son: " + perfectNumbers);
}
