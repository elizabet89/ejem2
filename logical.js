//operadores logicos
// operan sobre valores true/false

//AND, OR NOT

//AND es una operacion logica sera verdadero cuando todas las expresiones evaluadas son verdadesras

// TABLAS DE VERDAD

// EXPRESION1  -  EXPRESION2  -  OPERACION  - RESULTADO
 //     T               T             &&

 // suma y resta son operadores binarios
 //raiz cuadrada es unario
 //operador not ! es un operador unario invierte el valor logico de una expresion

// la coercion en js: esta forzando el comportamiento para que se comporte como otro tipo de datos;

// existe coercion implicita eso lo hace js
// la coercion (nosotros indicamos que un tipo de dato debe cambiar)explicita nosotros lo hacemos 
//  let number= 67;
//  let text="67";

//  console.log(typeof number);
//  console.log((typeof text));
// //=======================================

// // COERCION DE TIPOS

// // NUMBER
// let example = "67";
// let numberExample= Number(example);
// console.log(number);

// TRUE O FALSE  1-0
// let example1 = "67";
// let boolen=true;

// let num=34;
// let texto= String(num) ;
// console.log( typeof texto, texto);


//BOOLEN ES UNA ENVOLTURA PARA COMVERTIR A OTROS TIPOS DE DATOS EN BOOLEANOS

//truty todos los valores por coercion de tipos pasa a ser verdaderos.Boolen
// todo es verdadero usando el boolen par comvertir) excepto  el null ,undefined, "" , false ,  y cero cuando lo evaluamos bajo un contexto boleano
// let numero= 1;
// let boleanNumero=Boolen(numero);

// console.log(typeof nuemro, numero)

// let numero=NaN;
// console.log(typeof numero);

// Hagan un programa que calcule el numero de meses de vida de una persona;
 // mostrar el resultado por consola.


 //necesito la edad;
// 1 año vale 12 meses
// let edad=32;
// let meses= 12;
// let result= edad* meses;
// console.log(result +  "meses de vida");

//crear un programa que calcule el area de un cuadrado;

// let side=20;

// console.log(side**2);

//calcular el salario de un trabajador en base las horas trabajadas y los dias laborados.
//la hora lo define el patron segun el puesto del trabajador
//se paga por Mes
// cantidad de horas al dia 
// consideren que las horas trabajadas al dia son las mismas

// let horasPorDia=8;
// let diasLaborados=30;
// let horasTotales=horasPorDia*diasLaborados;
// let costoPorHora=35;

// let salarioTotal=horasTotales*costoPorHora;

// console.log(`el salario del trabajador durante el mes laborado es de $${salarioTotal} `);




// let horasPorDia=8;
// let diasLaborados=30;
// let costoPorHora=62.50;
// let horasTotales=horasPorDia*diasLaborados;

// let salarioTotal=horasTotales*costoPorHora;

// console.log(`el salario del trabajador durante el mes laborado es de $${salarioTotal} `);


// let gradosCentigrados=30;
// let gradosFarengeit=gradosCentigrados * 1.8 + 32;
// console.log(gradosFarengeit);

// let matematicas=10;
// let historia=7;
// let geografia=9;
// let español=10;
// let fisica=9;

// let promedio=matematicas+historia+geografia+español+fisica /5;
// console.log(promedio);

// let cali={
//     mate:10,
//     espa:9,
// };
// let suma=0;
// for(let nota in cali){
//     suma+= cali[nota]
   
// } console.log(suma);

// let num=undefined;
// let bol=Boolean(num);
// console.log(bol);

// console.log("N"> "n");
let num=NaN;

console.log(typeof num);
