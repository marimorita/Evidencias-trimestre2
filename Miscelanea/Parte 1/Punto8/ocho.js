//8. Cree una función que reciba un arreglo de n elementos y retorne el número de elementos del arreglo

function n() {
    let acomulador = 0;
    let array = [2, 4, 9, 3];
    for (let index = 0; index < array.length; index++) {
       acomulador ++   
    }
    return acomulador;
}

let consola = n();
console.log(consola);