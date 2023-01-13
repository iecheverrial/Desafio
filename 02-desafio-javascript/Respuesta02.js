//! =======================================================================================================================================================

/**
 *? EJERCICIO 2: Crear una función que reciba un arreglo como parámetro y cuente cuantos valores de tipo "number" se encuentran dentro de dicho arreglo
 */

//function contarTipoNumber(arreglo = []) {}

function contarTipoNumber(arreglo = [5,6,"hola",7,"h",8,""]) {
    let contador = 0;
    for (let index = 0; index < arreglo.length; index++) {
        if(typeof arreglo[index] === 'number' ){
            contador +=1
        }
    }
    return contador
}
console.log(contarTipoNumber())