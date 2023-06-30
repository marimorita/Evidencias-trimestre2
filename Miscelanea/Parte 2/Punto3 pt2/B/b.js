/*3. Use splice para hacer las eliminaciones correspondientes:
b) Dado el arreglo [99, false, 17, 45, 7, "abc", 78] Elimine el elemento de índice 6*/

function eliminarB() {
    let b = [99, false, 17, 45, 7, "abc", 78]
    b.splice (6,1)
    console.log(b);
}eliminarB();