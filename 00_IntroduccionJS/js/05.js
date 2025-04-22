// Objetos - Manipulacion

const producto = {
    // Key : Value
    nombre : "Tablet",
    precio : 300,
    disponible: false

}
// No permite modificar el objeto
// Object.freeze(producto)

// Permite modificar las propiedades existentes, pero no añadir ni eliminar
// Object.seal(producto)

// Reescribir un valor
producto.disponible = true
// Si no existe la propiedad, la añade
producto.imagen = 'imagen.jpg'

// Eliminar propiedad
delete producto.precio

console.log(producto);
