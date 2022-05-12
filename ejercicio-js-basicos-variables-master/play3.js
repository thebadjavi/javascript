// Tipos de variable

// Existen diferentes tipos de variables en JS. Los que veremos hoy son "number", "string"

// Se dice que una variable es de un tipo en concreto en el momento que le asignamos un valor

let edad = 30; // La variable edad es del tipo 'number' y su valor es 30.
let paisNacimineto = "Francia"; // La variable paisNacimiento es del tipo 'string' y su valor es "Francia"

// Los tipos de variables son importantes porque podemos usar OPERADORES para manipular sus valores

// Quiero reflejar que he cumplido un año!
edad = edad + 1; // el operador '+' en este caso ejecuta una operación arítmetica: suma al  valor que contenóa la variable 'edad' una unidad. 30 + 1 = 31.

console.log("Mi edad después de cumplir años es: " + edad);

// Sin embargo usar el operador '+' con dos "string" lo que hace es concatenarlos

let nombreGato = "Loki";
let caracterGato = "travieso";

let fraseLoki = nombreGato + " es " + caracterGato;

console.log(fraseLoki);