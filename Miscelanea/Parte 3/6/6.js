/*6. Dado el arreglo ["Maria", "Pedro", "Juan", "Pablo", "Diana", "Maria"] usar un ciclo, un condicional,
y una variable contador(iniciela fuera del ciclo y úsela para almacenar las veces que aparece Maria
en el arreglo) para mostrar cuántas veces aparece el nombre Maria*/

let array = ["Maria", "Pedro", "Juan", "Pablo", "Diana", "Maria"];

let contador = 0;

for (let index = 0; index < array.length; index++) {
     if (array[index] == "Maria") {
        contador ++     
    }
}

console.log("Maria aparece " + contador + " en el arreglo");