/*
*? EJERCICIO 14: Crear una función que reciba como parámetro un arreglo de 6 (seis) números como mínimo y realizar la sumatoria de los mismos.
*? Si la sumatoria supera un valor de 100 retornar True.
*? Caso contrario retornar False.
*? Validar al inicio de la función que el arreglo cuente con la condición establecida. Si no cumple la misma, retornar False
*/

function validarArreglo(numeros = []) {
    let Sumatoria = 0;
    if(numeros.length < 6) {
        return false
    }
    else
    for (let i = 0; i < numeros.length; i++) {
        Sumatoria = Sumatoria + numeros[i];
        }
    if(Sumatoria > 100) {
            return false;
        }
        else 
            return Sumatoria;
}

console.log(validarArreglo(numeros = [10,20,3,7,25,8]));