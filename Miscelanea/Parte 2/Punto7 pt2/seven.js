/*7. Dado el siguiente arreglo [1, 17, 8, 9, 3] use ciclo for (con .length) para recorrer el arreglo e imprimir todos sus elementos aumentados en 1*/

function aumentados() {
    let array = [1, 17, 8, 9, 3];
    for (let index = 0; index < array.length; index++) {
        let array2 = array [index] + 1  
        console.log(array2);
    }
}aumentados();