//Dado el arreglo [3, 50, 70, 600, 40]:
//4. Use ciclo for, condicional y operación módulo para recorrer el arreglo y mostrar cuales elementos son pares

function par() {

    let arreglo = [3, 50, 70, 600, 40];
    for (let index = 0; index < arreglo.length; index++) {
        if (arreglo[index] % 2 == 0) {
            console.log(arreglo[index]);
        }
    }   

}
par();
