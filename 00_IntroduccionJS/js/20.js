// Operadores AND y OR
const saldo = 1000;
const pagar = 200;
const tarjeta = false;

/*
 * Logical Or y Logical And
 * || Or - Al menos una se cumple
 * && And - Revisa que todas se cumplan
 */

if (saldo > pagar || tarjeta) {
  console.log("Puedes pagar");
} else {
  console.log("No puedes pagar");
}
