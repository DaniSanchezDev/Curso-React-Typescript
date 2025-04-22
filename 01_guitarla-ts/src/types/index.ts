export type Guitar = {
    id : number
    name : string
    image : string
    description: string
    price: number
}

// Herencia
export type CartItem = Guitar & {
    
    quantity:number
}

// Solo se puede coger un parametro
export type GuitarID = Guitar['id']

// Utility types

// Pick -> Selecciona los types que quieres añadir 
// export type CartItemPick = Pick<Guitar, 'id' | 'name' | 'price' > & {
//     quantity : number
// } 

// Omit -> omite ciertos atributos

// export type CartItemOmit = Omit<Guitar,'id' | 'name'> & {
//     quantity: number
// }