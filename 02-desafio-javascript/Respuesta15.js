/**
 *? EJERCICIO 15: Crear una función que reciba dos parámetros: un arreglo de strings con diferentes nombres, y un segundo parámetro con un nombre (string) cualquiera.
 *? La función debe retornar True si en ese arreglo se encuentra el nombre pasado como segundo parámetro. Caso contrario retornar False.
 *? Recordar que Javascript es "Case Sensitive", es decir, distingue entre mayúsculas y minúsculas.
 */

 function validarNombre(nombres = [], nombre) {
    validador = 0;
    for(i=0; i < nombres.length; i++) {
        if(nombres[i] == nombre) {
            validador++;
            }
        }
    if(validador == 0){
    return false;
    }
    else
          return true;
 }
 
 console.log(validarNombre(nombres = ["ivan","simon"],"simon"));
