//Dada la cadena "Somos SENA"
//c) Recorra la cadena usando ciclo for y muestre si la cadena contiene la letra “E”

let mensaje = "Somos sena"
for (let index = 0; index < mensaje.length; index++) {
    console.log(mensaje[index]);
}    if (mensaje.includes ("e")) {
    console.log("la cadena contiene la letra 'e'");
}