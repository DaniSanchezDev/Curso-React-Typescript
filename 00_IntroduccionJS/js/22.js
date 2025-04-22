// Optional Chaining ' ? '
const alumno = {
    nombre: "Juan",
    clase: "programacion 1",
    aprobado: true,
    examenes:{
        examen1: 90
    }
}

// Revisa si existe la propiedad y si no, muestra undefined pero sigue ejecutando el código para que no de error
console.log(alumno.examenes?.examen1);

console.log('Después de alumno');




// Nullish coalesing operator ' ?? '

// Es un operador que retorna el operando del lado derecho cuando el del lado izquierdo es null o undefined
const pagina = null ?? 1;
