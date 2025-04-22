// Eventos del DOM - Submit

const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.querySelector("#nombre").value;
  const password = document.querySelector("#password").value;
  console.log(nombre);
  console.log(password);

  // prevenir alerta
  const alertaPrevia = document.querySelector('.alerta')
  // con optional chaining revisa si existe o no, si existe, previene que se creen varias alertas
  
  alertaPrevia?.remove()

  const alerta = document.createElement("DIV");
  alerta.classList.add(
    "alerta",
    "text-white",
    "text-sm",
    "font-black",
    "p-2",
    "uppercase"
  );

  // Validación para completar campos formulario
  if (nombre === "" || password === "") {
    alerta.textContent = "Todos los campos son obligatorios...";
    alerta.classList.add('bg-red-500')
} else {
    alerta.textContent = "Iniciando sesión";
    alerta.classList.add('bg-green-500')
  }
  // appendChild sirve para agregar un hijo al formulario
  formulario.appendChild(alerta)

  setTimeout(() =>{
    alerta.remove();
  }, 2000)
});
