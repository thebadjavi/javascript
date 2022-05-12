// Tenemos que pensar que una variable es como una "cajita" que tiene un nombre y guarda un valor. Las variables se declaran usando algo denominado 'palabra reservada', propia de cada lenguaje de programación, seguido de un espacio y el nombre de variable

let nombre;

// cuando declaramos una variable y le asigmamos un valor, esa variable pasa a ser de un tipo en concreto. Vamos a ver 3 tipos de variables básicos. Los tipos de variables coinciden con el tipo de información que queremos representar de la vida 'real'. 

// Para hacerlo, usaremos un operador llamado 'operador de asignación'. NO es un 'igual', aunque coloquialmente así podemos llamarlo cuando hablemos, porque no está 'igualando' nada.

// Esto se le: 'declaramos la variable de nomnre "apellidos". Le asignamos el valor "Martinez Blanco" , usando el operador de asignación '='.

let apellidos = "Martinez Blanco";


// Pero, para que sirve almacenar variables? Pues para usarlas en OTRAS PARTES de nuestro programa. Por ejemplo, ahora podemos saludar:

console.log("Hola!");
console.log("Usted es el Sr.")
console.log(apellidos);

// También podríamos almacenar la edad de una persona
let edad = 28;

// Y poder informar posteriormente de dicha valor en un formulario, base de datos, etc.
console.log("La edad es")
console.log(edad);

// Que es esto de 'console.log' ? Por el momento, diremos que es una herramienta que nos permite mostrar por el terminal el valor de una variable o un valor constante

// Variable: edad, nombre, apellidos
// Constante: "Martinez", "Pedro", 5