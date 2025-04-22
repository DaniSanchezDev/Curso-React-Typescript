// Evaluación de corto circuito

const auth = true

if(40) {
    console.log('Truthy');
    
} else {
    console.log('Falsy');
    
}


const user = {}

user && console.log('Usuario autenticado');

const user2 = true
user2 && console.log('Usuario autenticado con corto circuito');
