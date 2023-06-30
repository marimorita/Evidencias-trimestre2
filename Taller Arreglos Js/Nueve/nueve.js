/*9. Cree una función que reciba una letra del alfabeto y muestre si tal letra corresponde a algún elemento
del siguiente arreglo
["a", "b", "c", "d", "e", "f", "g"] Use ciclo for (con .length) en la solución de este problema*/

let array = ["a", "b", "c", "d", "e", "f", "g"];
let letter = prompt("Ingresa una letra del alafabeto");

function abc() {
    for (let index = 0; index < array.length; index++) {
         if (letter == array[index]) {
            return true;
         }
    }
    return false;
}
let result = abc();
console.log(result);