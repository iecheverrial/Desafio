/**
 *? EJERCICIO 18: Crear una función que reciba 2 (dos) parámetros: el "objetoFijo" definido al inicio y un número (cantidad de empleados).
 *? La función debe retornar la cantidad de sedes que tengan una cantidad de empleados menor a la cantidad establecida como segundo parámetro.
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

  function verificarCantidadEmpleados(econtact ={},cantidad) {
    let contador=0;
    if (econtact.Chile.empleados<cantidad) {contador ++};
     if (econtact.Peru.empleados<cantidad) {contador ++};
         if (econtact.Ecuador.empleados<cantidad) {contador ++};
             if (econtact.EEUU.empleados<cantidad) {contador ++};
                 if (econtact.Colombia.empleados<cantidad) {contador ++};
    
    return `la cantidad de sedes con menos de ${cantidad} empleados es: ${contador}`;

};

 
console.log(verificarCantidadEmpleados(objetoFijo.datos.sedes,35));