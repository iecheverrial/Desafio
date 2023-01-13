/**
 *? EJERCICIO 13: Crear una función que retorne un nuevo arreglo con el cuadrado de cada número del "arregloFijo" definido al inicio
 *? Ayuda: para calcular el cuadrado de un número podemos usar la expresión "**" o la clase "Math" con su método "pow". Ver ejemplos a continuación:
 *? Ejemplo de 3 al cuadrado:
 *? console.log(3 ** 2)
 *? Ejemplo de 5 al cuadrado:
 *? console.log(Math.pow(5, 2))
 */
 const arregloFijo = [1, 3, 4, 7, 12, 18, 20, 26];

 function calcularCuadrados(arreglo = arregloFijo) {
    let NuevoArrego = [];
    let Respuesta = 0;
    for (let i = 0; i < arreglo.length; i++) {
        NuevoArrego.push(arreglo[i] * arreglo[i]);
    }
    return NuevoArrego;
 }

 console.log(calcularCuadrados());