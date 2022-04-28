/*
        EJERCICIO NRO 1

    Crear variables para guardar los siguientes datos de una persona:

        Nombre
        Apellidos
        Edad
        Ciudad
        Asignar valores a las variables creadas.

*/

let nombre, apellidos, edad, ciudad;

nombre = "Francisco";
apellidos = "Repillosa Gonzalez";
edad = 19;
ciudad = "Macaray";

/*
console.log(nombre);
console.log(apellidos);
console.log(edad);
console.log(ciudad);
*/



/*
    EJERCICIO NRO 2

    Crear un array con 5 valores numericos
    y sumar todos esos valores accediendolos mediante las posiciones

*/


const numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce((total, number) => total + number );

//console.log(sum);




/*
    EJERCICIO NR 3

   Crear un objeto de nombre user con las propiedades nombre, apellidos, y edad,
   despues de crear el objeto. crear una nueva variable llamada nombreCompleto de tipo string y 
   guardar en esta variable el nombre y el apellido concatenados.

*/

const user = {
    nombre: "Francisco",
    apellidos: "Repillosa Gonzalez",
    edad: 19
}

const nombreCompleto = `${user.nombre} ${user.apellidos}`;


//console.log("nombre completo", nombreCompleto);




/*
      EJERCICIO NR 4

   1. Crear un arreglo con 5 objetos, cada uno de estos objetos debe de tener las propiedades nombre, email y edad, con valores asignados por ti.
   2. Crear un arreglo de nombre de correos y guardar todos los correos que existan en el arreglo del primer paso(debes de acceder a los correos apoyandote en lo aprendido anteriormente).

*/


const users = [
    {nombre: "Tate", email: "tate@tatemacrae.com", edad: 17},
    {nombre: "hailey ", email: "hailey@hailey.com", edad: 17},
    {nombre: "Anael", email: "anael@anael.com", edad: 20},
    {nombre: "Selena", email: "selena@selena.com", edad: 27},
    {nombre: "Camila", email: "camila@camila.com", edad: 24}
]


const emails = users.map( user => user.email)


//console.log(emails);
