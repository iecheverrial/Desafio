/**
 *? EJERCICIO 7: Crear una función que reciba el "objetoFijo" definido al inicio y retornar la cantidad de paises que cuentan con telefono asignado
 *?
 */
 const objetoFijo = {
    empresa: "E-Contact",
    datos: {
      empleados: 100,
      direccion: {
        calle: "Calle Córdoba",
        numero: 476,
        piso: 3,
      },
      sectores: [
        "Contabilidad",
        "Finanzas",
        "Informática",
        "Atención al público",
      ],
      sedes: {
        Chile: { telefono: 56227566262, empleados: 35 },
        Peru: { telefono: 5116358614, empleados: 25 },
        EEUU: { telefono: 17864978777, empleados: 43 },
        Ecuador: { telefono: null, empleados: 19 },
        Colombia: { telefono: 3178952449, empleados: 28 },
      },
    },
  };

 function obtenerPaisesConTelefono(econtact = {...objetoFijo.datos.sedes}) {
    let ConFono=0;
    let arr = Object.fromEntries(Object.entries(econtact));
    for (let clave in arr){
      if(arr[clave].telefono)
      ConFono++
    } 
    
    return ConFono;
   
 }

 console.log(obtenerPaisesConTelefono())
 