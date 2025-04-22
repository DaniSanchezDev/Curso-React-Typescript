const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js','Node.js'];

const react = tecnologias[3]

//Destructuring arrays - va asignando según la posición
const [html, css, javascript] = tecnologias

// Extrae solo el valor de React.js y lo asigna a reactjs 
const [ , , , reactjs] = tecnologias

console.log(reactjs);
