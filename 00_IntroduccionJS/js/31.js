// Eventos del DOM - Inputs

const inputNombre = document.querySelector("#nombre");
inputNombre.addEventListener("input", (e) => {
  console.log("Escribiendo...");
  console.log(e.target);
  console.log(e.target.value);
});

const inputPassword = document.querySelector("#password");

inputPassword.addEventListener("input", functionPassword);
function functionPassword(e) {
  // mostrar la contraseña
  inputPassword.type = "text";
  // volver a ocultar la contraseña cuando pasa 1 segundo
  setTimeout(() => {
    inputPassword.type = "password";
  }, 1000);
}
