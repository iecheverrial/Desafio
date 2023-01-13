/**
 *? EJERCICIO 8: Crear una función que reciba 3 (tres) parámetros: uno de tipo "string" con la operación matemática a realizar,
 *? un segundo y tercer parámetro ambos de tipo number. Dependiendo de ello realizar la operación correspondiente y retornar el resultado de esa operación.
 *? Los valores permitidos a recibir son:
 *? "+"
 *? "-"
 *? "*"
 *? "/"
 *? En caso contrario, retornar un string con la frase "La operación matemática que intenta realizar es inexistente"
 */

 function calculoMatematico(operacion, numero1, numero2) {
    let Resultado = 0;
    if(operacion === "+" || operacion === "*" || operacion === "/" || operacion === "-") {
        if(operacion === "+") {Resultado = numero1 + numero2}; 
        if(operacion == "*") {Resultado = numero1 * numero2};
        if(operacion == "/") {Resultado = numero1 / numero2};
        if(operacion == "-") {Resultado = numero1 - numero2};
       return Resultado;
    }
    else
        return `La operación matemática que intenta realizar es inexistente`;
 }

 console.log(calculoMatematico("*",6,7));