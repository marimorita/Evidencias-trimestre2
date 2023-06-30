/*10. Dado el arreglo de caracteres: ["z", "p", "s", "z", "o", "b", "a", "w", "d"] use ciclo for para
inspeccionar los elementos del arreglo y mostrar si con tales elementos sería posible formar la
palabra adso.*/

let arreglo =["z", "p", "s", "z", "o", "b", "a", "w", "d"] 
for (let i = 0; i < arreglo.length; i++) {
    if (arreglo.includes ("d" , "a" , "o" , "s")) {
        console.log("El arreglo cuenta con los caracteres para la palabra ADSO");
    };
    
}