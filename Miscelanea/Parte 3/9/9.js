/*9. Dado el arreglo [true, true, false, true, false, false] use ciclo while y una variable
contadora(diferente al contador del ciclo) para mostrar cuántas veces aparece false en el arreglo.
Como sugerencia, se puede basar en el ejercicio 6 anterior de arreglos para ver como se implementa
la variable contadora*/

let arreglo = [true, true, false, true, false, false];

let contadora = 0;
let contador = 0;

while (contador <arreglo.length) {
    if (arreglo [contador] == false) {
        contadora ++
    }
    contador ++
}
console.log("False aparece " + contadora + " en el arreglo") ;