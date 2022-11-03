//programa una funcion que reciba un texto como paramentro y que devuelva el texto invertido
// function invertirTexto(texto) {

//   let resul=  texto.split(" ").reverse();
//   let resultado=resul.join(" ");
//   return resultado;
    
// }
// console.log(invertirTexto("hola mundo"));

//programa una funcion que cuente el numero de veces que se repita la palabra

function palRepetida(text) {
    let total=0;
    let separar=text.split(" ");
    for(let i=1; i< separar.length; i++){
       if(separar[i]=== "programar"){
        total++;
       }
       
    }
return total;

  
    }
  console.log(palRepetida("hola mexico programar programar hola programar"));