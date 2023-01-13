/*
*? EJERCICIO 11: Crear una función que reciba un arreglo de números y realice la sumatoria de los mismos.
*? La función debe retornar la sumatoria de esos números.
*?
*/

function sumatoria(numeros = []) {
    let R_Suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        R_Suma = R_Suma + numeros[i];
    }
    return R_Suma;
}

console.log(sumatoria(numeros = [10,20,3,7,25,8,30,9,35,18,45]));