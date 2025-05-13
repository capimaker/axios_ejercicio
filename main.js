/*1.Obtener y mostrar usuarios utilizando la API de JSONPlaceholder
En este ejercicio utilizaremos la API de https://jsonplaceholder.typicode.com/users. Leyendo su documentación, deberás hacer lo siguiente:*/

//Imprimir por consola la lista (array) de usuarios.

axios.get("https://jsonplaceholder.typicode.com/users")
.then((res) => console.log(res))
.catch((err) => console.log(err));


//Imprimir por consola solo el nombre de los usuarios.
axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        res.data.forEach((usuario) => {
          console.log(usuario.name); 
        });
      })
      .catch((err) => console.error(err));


//Crear una variable global llamada "users" y, al hacer la solicitud utilizando Axios, rellenarla con la respuesta de la API(el array). 
// Este proceso debe realizarse fuera de cualquier función.

/*Nota: Después de realizar el console.log de la variable "users", es normal que aparezca vacía debido a que JavaScript no es bloqueante y el console.log 
se ejecuta antes de que la variable sea llenada con la información de la solicitud.*/
// archivo JS
// variable global
// petición axios (aquí hago la petición y dentro relleno la variable creada anteriormente)

//Crear una función llamada "showUsers" que muestre por consola la variable global "users" que has creado.
//Crea un botón que cuando lo cliques ejecute la función que habías creado
//Ahora en vez de mostrar los usuarios por consola muestra el nombre de cada uno en el DOM (en el HTML).

let users = [];

   function showUsers() {
     const lista = document.getElementById("users");

     lista.innerHTML = "";

     users.forEach((usuario) => {
       const item = document.createElement("li");
       item.textContent = usuario.name; 
       lista.appendChild(item);
     });
   }

   axios.get("https://jsonplaceholder.typicode.com/users")
     .then((res) => {
       users = res.data;
       document.getElementById("btnUsers").addEventListener("click", showUsers);
     })
     .catch((err) => console.error(err));
