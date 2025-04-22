// Objetos - Destructuring de dos o mas objetos

const producto = {
    // Key : Value
    nombre : "Tablet",
    precio : 300,
    disponible: false
}

const cliente = {
    nombre: "Juan",
    premium: true,
    direccion:{
        calle: "Calle México",
        numero: 44
        
    }
}

const {nombre} = producto
// coge el nombre y la renombra como nombreCliente
const {nombre:nombreCliente} = cliente
// Destructuring de un objeto dentro de otro objeto
const {nombre:nombreCliente2, direccion:{numero}} = cliente

console.log(nombreCliente);
console.log(nombre);

console.log(calle);
console.log(numero);

