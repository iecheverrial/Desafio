/**
 *? EJERCICIO 10: Crear una función que reciba un arreglo de números como parámetro y calcule cuántos de esos números son divisibles por 5.
 *? La función debe retornar la cantidad de números divisibles por 5.
 *?  Ayuda: Usar el operador módulo (o resto) "%"
 */

 function divisiblesPorCinco(numeros = []) {
    let Cantidad = 0;
    for (let i = 0; i < numeros.length; i++) {
        if(numeros[i] % 5 === 0) {
            Cantidad++
        }
    }
    return Cantidad;
 }

 console.log(divisiblesPorCinco(numeros = [10,20,3,7,25,8,30,9,35,18,45]));