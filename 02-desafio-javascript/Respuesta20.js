/**
 *? EJERCICIO 20: Crear una función que reciba un arreglo de numeros reales y retornar un nuevo arreglo con los mismos numeros pero quitando su parte decimal.
 *? Recordatorio: al inicio hay un arreglo de numeros reales como ejemplo.
 */

 const numerosReales = [34.4552, 25.1543, 17.9438, 90.5, 67.82, 5, 9.99, 62.037];

 function quitarParteDecimal(arreglo = numerosReales) {
 
    let NuevoArrego = [];
    for (let i = 0; i < arreglo.length ; i++) {
        NuevoArrego.push(Math.trunc(arreglo[i]));
    }
    return NuevoArrego;
 }
 
 console.log(quitarParteDecimal())