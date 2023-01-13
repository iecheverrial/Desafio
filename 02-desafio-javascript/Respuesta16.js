/**
 *? EJERCICIO 16: Crear una función que reciba 2 (dos) parámetros: un arreglo de números y número. La función debe retornar la posición de ese valor en el arreglo
 */

 function devolverPosicion(numeros = [], numero) {
    Posicion = 0;
    for(i=0; i < numeros.length; i++) {
        if(numeros[i] == numero) {
            Posicion = i;
        }
    }
    return Posicion;
 }

 console.log(devolverPosicion(numeros = [4,5,6,7,8],5));