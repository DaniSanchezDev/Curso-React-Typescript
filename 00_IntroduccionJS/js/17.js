const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js','Node.js', 'Next.js'];
const numeros =  [10,20,30,34]

// Filter

const nuevoArray = tecnologias.filter(ejemploFilter)

function ejemploFilter(i) {
    console.log(i);
}

// Muestra todas las tecnologias que sean diferentes a HTML
const nuevoArray2 = tecnologias.filter((tech) => tech !== 'HTML')

console.log(nuevoArray2);

const resultado = numeros.filter(numero => numero !== 10 && numero !== 20)
console.log(resultado);


// Includes - Revisa si la condicion se incluye en el arreglo

const resultado2 = tecnologias.includes('CSS')
console.log(resultado2); // muestra true o false

// Some - Devuelve si al menos uno cumple la condición

const resultado3 = numeros.some( numero => numero > 15)
console.log(resultado3);


// Find - Devuelve el primer elemento 
const resultado4 = numeros.find(numero => numero > 15)
console.log(resultado4);

// Every - Si todos cumplen la condicion, devuelve true o false

const resultado5 = numeros.every(numero => numero > 10)
console.log(resultado5);

// Reduce - Devuelve un acumulado del total 

const resultadoTotal = numeros.reduce((total, numero) => {
    console.log(total);

    return total + numero
    
}, 0)

