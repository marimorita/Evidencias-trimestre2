//5. Dado el arreglo ["Maria", "Pedro", "Juan", "Pablo", "Diana"] usar un ciclo y un condicional para mostrar si el nombre Juan se encuentra dentro del arreglo

function juan() {
   let array = ["Maria", "Pedro", "Juan", "Pablo", "Diana"];
    for (let index = 0; index < array.length; index++) {
        if (array[index] == "Juan") {
            return true;
        }    
    }
    return false;
}
let result = juan ();
console.log(result);