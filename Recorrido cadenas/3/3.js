/*3.Dada la cadena “Javascript es genial” recorra la cadena usando ciclo for y muestre por cuantas palabras está
compuesta la cadena. Como sugerencia se puede basar en el modelo del ejercicio 2 literal d.*/

let java = "Javascript es genial";
let contador = 1;

for (let index = 0; index < java.length; index++) {
      if (java[index] == " ") {
        contador ++
      }
}
console.log("la cadena Javascript es genial contiene " + contador + " palabras");