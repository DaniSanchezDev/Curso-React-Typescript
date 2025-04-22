// Objetos

const productos = {
    // Key : Value
    nombre : "Tablet",
    precio : 300,
    disponible: false

}

// console.log(productos);
// console.table(productos)
// console.log(productos.nombre);

// const nombre = productos.nombre

// Destructuring
const {nombre, disponible, precio} = productos
console.log(nombre);
console.log(disponible);
console.log(precio);

// Object Literal Enhacement
const autenticado = true
const usuario = "Juan"

const nuevoObjeto = {
    autenticado,
    usuario2:usuario
}

console.log(nuevoObjeto);
