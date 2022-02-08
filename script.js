const ejercicio1 = [
  3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
  19, 88, 456, 13, 23, 24,
];

const ejercicio2 = [
  {
    nombre: "Gabriel",
    edad: 22,
    esFamiliar: false,
  },
  {
    nombre: "Jaime",
    edad: 15,
    esFamiliar: true,
  },
  {
    nombre: "María",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Angel",
    edad: 19,
    esFamiliar: true,
  },
  {
    nombre: "Fer",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Rachel",
    edad: 30,
    esFamiliar: true,
  },
];

/* ====================PRACTICA======================
let Hola = "Hola mundo (o^▽^o)";
const nombre = "Zobeck"; 
let edad = 15;
let decision = false;

if(edad > 18){
  console.log( `${nombre} es mayor de edad`);
}else {
  console.log( `${nombre} no es mayor de edad`);
}
*/

console.log("============Ejercicio 1==============");


const compPrimo = (numero) => {
  for (let num =2; num <= numero/2; num++){
    if(numero % num ===0){
      return false;
    }
  }
  return true;
};

for(let index=0; index < ejercicio1.length; index++){
  const item = ejercicio1[index];

  const esPrimo = compPrimo(item);
  if(esPrimo){
    console.log( item,"es primo" );
  }
}


//==================Ejercicio 2==========

console.log("============Ejercicio 2==============");

function admision(invitado){
if(invitado.edad>=18 && invitado.esFamiliar){
console.log(`${invitado.nombre} puede pasar`);
}}

ejercicio2.forEach((invitado)=>{
admision(invitado);
});


//==================Ejercicio 3 ==========

console.log("============Ejercicio 3 ==============");

function fibonacci(limit){
  const fib= [0,1];
  for(let num =2; num < limit; num++){
    fib[num] = fib[num - 1] + fib [num -2];

  }

  return fib;
}
const fibonacciSerie =fibonacci(50);{
  console.log("Estos son los primeros 50 números de la secuencia de fibonacci:"  + fibonacciSerie)
}