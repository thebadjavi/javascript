/**
 * Calcula el area de un círculo!
 * 
 * JavaScript nos ofrece módulos con herramientas matemáticas, como por ejemplo, el módulo Math. Entre sus propiedades, podemos acceder a una aprxoimación del valor PI: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math/PI
 * 
 * - Crea un script que, dado el radio de un círculo, cálcule su area y muestra el valor por pantalla. Recuerda que el valor del area de un círculo se calcula con la fórmula: Area	= π r2
 * 
 * 
 * - El radio debe almacenarse en una variable.
 * - Ejemplo: si la variable del radio vale 3, deberíamos ver un mensaje por pantalla que diga: "El area de un círculo de radio 3 es de 28.274333882308138 m2"
 * 
 * 
 */

let numeroPi = Math.PI
console.log("Valor de PI:", numeroPi)
radio=3
let area= 2 * Math.PI * radio;
console.log("El area es :"+ area)

/**
 * BONUS: Muestra el mensaje de tal manera que el número devuelto esté redondeado a dos decimales. Es decir, para un radio de 3, el mensaje debería ser: ""El area de un círculo de radio 3 es de 28.27 m2"
 */
 x = Math.round(area);
 console.log("Y mal redonedado es :"+ x)

