/**
 *? EJERCICIO 4: Crear una función que reciba 2 (dos) parámetros de tipo "number" con el inicio y fin del rango a operar. Evaluar cuántos números dentro de
 *? ese rango son "pares". Luego, retornar un string con la frase "La cantidad de números pares obtenido fue de: "
 *?
 */

function obtenerCantidadDePares(numero1, numero2) {
    let contador = 0
    for (let index = numero1; index <= numero2; index++) {
        if (index %2===0){
            contador++;
        }
    }
    return `La cantidad de números pares obtenido fue de: ${contador}`
}

console.log(obtenerCantidadDePares(1,100))