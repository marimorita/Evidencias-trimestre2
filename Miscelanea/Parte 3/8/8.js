/*8. Dado el arreglo [-2, 8, 99, 1, 7] usar ciclo forEach y una variable contadora para mostrar la suma de
los cuadrados de sus elementos.Como sugerencia, se puede basar en el ejercicio 6 anterior de
arreglos para ver cómo se implementa la variable contadora*/

let array = [-2, 8, 99, 1, 7];
let contadora = 0;

array.forEach(index => {
    let cuadrado = index * index
    contadora += cuadrado
});

console.log(contadora);
