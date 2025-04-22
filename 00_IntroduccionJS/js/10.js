const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js','Node.js'];
//Modificar una posicion
// tecnologias[4] = 'Next.js';

// Si no existe ese indice, lo agrega
tecnologias[5] = 'Angular'

// añadir tecnologia - No recomendable en react
tecnologias.push = 'Next.js'

// Crea un nuevo arreglo copiando todas las tecnoligias, y añade next.js
const nuevoArreglo = [...tecnologias, 'Next.js']

// Eliminar HTML 
// Shift elimina el primer elemento del array
tecnologias.shift

// El filter selecciona y muestra un elemento filtrado. Tech se refiere a cada indice del array
const tecnologias2 = tecnologias.filter(function(tech) {
    if(tech !== 'HTML'){
        return tech
    }
})
console.log(tecnologias2);

// Añadir sin mutar el código

const tecnologias3 = tecnologias.map(function(tech) {
    if(tech === 'Node.js'){
        return 'Next.js'
    } else {
        return tech
    }
})
console.log(tecnologias3);

