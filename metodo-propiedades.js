// Metodos y Propiedades//

/* endwith --- metodo y sirve para compara si termina con esa letra en el texto compelto*/

let letra= "hola como estas oseas";
console.log(letra.endsWith("l"));

/* indexOf -- metodo--te devuelve la posicion de la letra que le mandes devuelve el indice de la primera letra que encuentre  en caso que se repita*/

console.log(letra.indexOf("l"));

/* lastIndexOf -- metodo--te devuelve la posicion de la ultima letra que le mandes devuelve el indice de la ultima letra que encuentre en caso que se repita */


console.log(letra.lastIndexOf("l"));
/* slice --es el metood que corta texto corta palabras dandole una pocicion inicial y final nota no agrega el final osea corta hasta una letra antes del final señalado*/

console.log(letra.slice(0,3));


/*replace -- metodo rempplaza una palabra por otra en una oracion*/
console.log(letra.replace("hola", "que tal"));

/*includes-- metodo me dice si existe una palabra en la oracion y devuelve true o false*/


console.log(letra.includes("oseas"));



