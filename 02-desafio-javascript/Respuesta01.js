
/**
 *? EJERCICIO 1: Crear una función la cual reciba un parámetro de tipo string con el nombre de la persona y retornar un nuevo string
 *? dependiendo del largo del nombre:
 *? Si el largo se encuentra entre 0 y 5 retornar "Es un nombre corto. Su largo es de: "
 *? Si el largo es 11 o mayor retornar "Es un nombre largo. Su largo es de: "
 *? IMPORTANTE: validar que el parámetro recibido sea un string al inicio de la función, de lo contrario, retornar "El parámetro recibido es invalido"
 *? RECORDATORIO: al leer la sentencia "return" termina la ejecución de la función.
 */

 //function largoDelNombre(nombre = "") {}

function largoDelNombre(nombre = "") {
    if (typeof nombre === "string") {
        if(nombre.length<=5){
            return `Es un nombre corto. Su largo es de: ${nombre.length}`;
        }
        if(nombre.length>=11){
            return `Es un nombre largo. Su largo es de: ${nombre.length}`;
        }
    }
    return `El parámetro recibido es invalido`; 
}

console.log(largoDelNombre(45));  