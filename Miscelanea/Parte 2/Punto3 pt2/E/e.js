/*e) Dado el arreglo [34, ["q"], 67, 1, 99, 1/2] Elimine los elementos desde el índice 3 hasta el índice 4 en
un sólo llamado*/

function eliminarE() {
    let e = [34, ["q"], 67, 1, 99, 1/2] 
    e.splice (3, 4)
    console.log(e);
}
eliminarE();