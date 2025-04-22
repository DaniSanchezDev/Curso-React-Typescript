// Iterar arrays
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js','Node.js', 'Next.js'];

// for
for (let i = 0; i < tecnologias.length; i++){
    console.log(tecnologias[i])
}

// foreach
tecnologias.forEach(function(tecnologia){
    console.log(tecnologia);
})

// map (pero crea un nuevo arreglo)
const arrayMap = tecnologias.map(function(tech){
    return tech
})


// for ... of

for (const tech of tecnologias) {
    console.log(`Codigo desde for of: ${tech}`);
    
}
