/*9. Cree una función que reciba una letra del alfabeto y muestre si tal letra corresponde a algún
elemento del siguiente arreglo
["a", "b", "c", "d", "e", "f", "g"] Use ciclo for (con .length) en la solución de este problema*/

let array = ["a", "b", "c", "d", "e", "f", "g"];
let b = prompt("Ingresa una letra del alfabeto");

function letra(b, array) {
    for (let index = 0; index < array.length; index++) {
        if (array [index] == b) {
           return true;
        }
  }
  return false;
}
let result = letra(b, array);
console.log(result);