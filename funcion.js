//bloque de codigo dedicado a realizar una sola tarea
// let text= "hola como estas";
// text[2];

// let texto="frase nueva ely";
// console.log(texto.endsWith("ely",))

// let texto= "hola, como estas";
// let result= texto.slice(0,4);;
// console.log(result);
// let users = [
//     {
//       name: "Erik",
//       email: "erik@academlo.com",
//       age: 20
//     },
//     {
//       name: "Georg",
//       email: "georg@academlo.com",
//       age: 30
//     },
//     {
//       name: "Daniel",
//       email: "daniel@academlo.com",
//       age: 40
//     },
  
  
//   ]; 
// function getEmails(user) {
//     let emails = [];
//     for (let i = 0; i< user.lenght; i++) {
//       emails.push( user[i].email);
      
//     }
  //   return emails;
   
  // }
// getEmails(users);
  // console.log(users);
  // let array= [1,2,3];
  // function sumValues() {
    
  //   let sum = 0;
  //   for (let i = 0; i < array.length; i++) {
  //     sum += array[i];
  //   }
  //   return sum;
  //   // escribe tu solución aquí
  //   // Recuerda que en esta prueba debes "retornar" el resultado
  //   // por ejemplo en el siguiente ejemplo tendrías el resultado en la variable sum
  //   // return sum;
  // }
  // console.log(sumValues() );

  // function getEmail() {
  //   let userio = {
  //     name: "Erik",
  //     email: "erik@academlo.com"
  //   };
  // let correo="";
  //   for (let item of userio) {
  //      correo = item.email;
  //   }
  //   return correo;
  
  // }
  // console.log(getEmail());
  
  let userio = 
    [
      { name: "Erik", email: "erik@academlo.com", age: 20 },
      { name: "Georg", email: "georg@academlo.com", age: 30 },
      { name: "Daniel", email: "daniel@academlo.com", age: 40 }
    ];
  
let arreglo=[];
for(let item in userio){
  arreglo.push(userio[item].email)
}
console.log(arreglo );

  // for(let item in userio){
  //   console.log(userio[item])
  // }