// Modulos de ES6 - Importaciones
import multiplicar, { sumar, restar, division } from "./funciones.js";

const resultadoSumar = sumar(20, 50);
console.log(resultadoSumar);

const resultadoRestar = restar(50, 10);
console.log(resultadoRestar);

const resultadoMultiplicacion = multiplicar(10, 3);
console.log(resultadoMultiplicacion);

const resultadoDivision = division(200, 10);
console.log(resultadoDivision);
