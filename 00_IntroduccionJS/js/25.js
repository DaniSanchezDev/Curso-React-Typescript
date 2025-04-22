// Fetch API con Promises

const url = "https://jsonplaceholder.typicode.com/posts";

fetch(url)
  // accedemos al json
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Existe un error...");
  })
  // accedemos a los datos
  .then((data) => {
    console.log(data);
  })
  // creamos un arror por si algo falla
  .catch((error) => {
    console.log(error.message);
  });
