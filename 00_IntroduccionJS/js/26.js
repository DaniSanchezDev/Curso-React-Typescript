// Fetch API con async / await

const url = "https://jsonplaceholder.typicode.com/posts";
const url2 = "https://jsonplaceholder.typicode.com/comments";

// Fetch API con promises
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


// Fetch API con async y await
const consultarAPI = async () => {
  try {
    const response = await fetch(url2);
    if (!response.ok){
        throw new Error("Hubo un error..");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

consultarAPI();
