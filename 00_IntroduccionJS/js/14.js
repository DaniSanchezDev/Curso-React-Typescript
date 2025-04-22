// Funciones - Function Expression
sumar(10,20)
sumar(300,10)
sumar(100)

// en esta forma, aunque declaremos después la funcion la lee igual porque JS primero lee las funciones y luego ejecuta. Pero  en la siguiente, en function expression no funcionaria ya que la lee como una variable
function sumar(num1, num2){
    console.log(num1+ num2);
    
}

// Esto es function expression, otra forma de declarar una funcion
const sumar = function(num1, num2){
    console.log(num1+ num2);
    
}

sumar(10,20)

