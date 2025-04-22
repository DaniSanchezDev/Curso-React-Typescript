const producto = {
    // Key : Value
    nombre : "Tablet",
    precio : 300,
    disponible: false
}

const cliente = {
    nombre: "Juan",
    premium: true
}

const carrito = {
    cantidad: 1,
    //añadimos toda la información del producto con el spreed operator (...)
    ...producto
}

console.log(carrito);


const nuevoObjeto = {
    producto: {...producto},
    cliente:{...cliente}
}

// mismo codigo que el de arriba con Object Literal 
const nuevoObjeto2 = {
    producto,
    cliente
}

const nuevoObjeto3 = Object.assign(producto,cliente)
console.log(nuevoObjeto3);

