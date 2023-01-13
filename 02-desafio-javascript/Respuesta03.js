/**
 *? EJERCICIO 3: Crear una función que reciba un objeto como parámetro con los claves nombre, edad y altura, y retornar un string usando template literals
 *? con el siguiente formato: "Esta persona se llama XXX, tiene XXX años y su altura es de XXX"
 *? NOTA: Desestructurar los valores del objeto antes de utilizarlos
 */

function datosPersona(persona = {
        nombre:'Pepito',
        edad: 35,
        altura: 1.76
    }) {
    const {nombre,edad,altura} = persona;
    return `Esta persona se llama ${nombre}, tiene ${edad} años y su altura es de ${altura} metros`
}

console.log(datosPersona())