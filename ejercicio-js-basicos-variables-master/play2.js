/** ¿ Qué nombre le pongo a una variable? */

// Las variables deben indetificar el tipo de valor que contienen. Ejemplo

/**
 * Queremos almacenar información sobre los datos necesarios para inscribirnos en el curso de programación. Nos preguntan: nombre, apellidos, fecha de nacimiento, dni o nie.
 */

let nombre = "Sara";
let apellidos = "Romero Ortiz";
let fechaNacimiento = "19 de Mayo de 1982";
let numeroAnimales = 1;
let dni = "12345679A";

// Lo más importante es poner un nombre a la variable que indique el tipo de información que almacena. por ejemplo 'fecha' no seria adecuado para indicarl a fecha de nacimiento, porque no especifica 'que tipo de fecha es'.

/** No podemos poner CUALQUIER nombre a las variables. deben seguir unas reglas. Típicamente usarmeos letras, o letras acompañados con un numero. También podemos usar guiones bajos */

/**
 * Resumen:
 * 
 * Names can contain letters, digits, underscores, and dollar signs.
Names must begin with a letter
Names can also begin with $ and _ (but we will not use it in this tutorial)
Names are case sensitive (y and Y are different variables)
Reserved words (like JavaScript keywords) cannot be used as names
 */

// Las variables en JavaScript son 'case sensitive'. Esto quiere decir que no es lo mismo la variable

let edad = 22;

// que la variable

let EDAD = 30;

console.log(EDAD); // printiará 30
// console.log(edaD); // Y esto, que printaría?


// Podemos ponerle el nomnbre que queremos a una variable. Pero por convención, en JavaScript se utiliza notación camelCase cuando el nombre de la variable es una palabra compuesta. En caso contrario, usar solo minúsculas

let fechaDefuncion;
let dineroGastado;
let paisNacimineto;
let numGatos;
let imc;