/**
 *? EJERCICIO 19: Crear una función que reciba 2 (dos) parámetros: un objeto y un string (clave a verificar). Si el objeto cuenta con la clave que se solicita
 *? como segundo parámetro, retornar True. Caso contrario retornar False.
 *? Ejemplo: El siguiente objeto cuenta con las claves nombre, edad y profesion. PERO no cuenta con la clave "altura" por ejemplo.
 *? const alumno = { nombre: 'Juan', edad: 35, profesion: 'programador' }
 *?
 */

 function verificarClave(objeto = {}, clave) {

    return objeto.hasOwnProperty(clave);

 }
 console.log(verificarClave(objeto = { nombre: 'Juan', edad: 35, profesion: 'programador' },"nombre"))