//Dada la cadena "Somos SENA" 
//d) Recorra la cadena usando ciclo for y muestre cuántas veces está la letra “o” . Como sugerencia use una variable contadora para contar el número de veces que se encuentra la letra “o”.

let contador = 0;
let mensaje = "Somos sena";

for (let index = 0; index < mensaje.length; index++) {
    if (mensaje[index] == "o") {
        contador ++;
    }
}  console.log("la cadena contiene la letra o " + contador + " veces");