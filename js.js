// document.addEventListener("DOMContentLoaded", function () {
const uno = document.querySelector(".uno");
const dos = document.querySelector(".dos");
const tres = document.querySelector(".tres");
const cuatro = document.querySelector(".cuatro");
const cinco = document.querySelector(".cinco");
const seis = document.querySelector(".seis");
const siete = document.querySelector(".siete");
const ocho = document.querySelector(".ocho");
const nueve = document.querySelector(".nueve");
const cero = document.querySelector(".cero");
const suma = document.querySelector(".suma");
const resta = document.querySelector(".resta");
const multi = document.querySelector(".multi");
const dividir = document.querySelector(".dividir");
const igual = document.querySelector(".igual");
const cac = document.querySelector(".borrar");
const pant = document.querySelector("#span-pant");

uno.addEventListener("click", numeros);
dos.addEventListener("click", numeros);
tres.addEventListener("click", numeros);
cuatro.addEventListener("click", numeros);
cinco.addEventListener("click", numeros);
seis.addEventListener("click", numeros);
siete.addEventListener("click", numeros);
ocho.addEventListener("click", numeros);
nueve.addEventListener("click", numeros);
cero.addEventListener("click", numeros);
suma.addEventListener("click", numeros);
resta.addEventListener("click", numeros);
multi.addEventListener("click", numeros);
dividir.addEventListener("click", numeros);
igual.addEventListener("click", numeros);
cac.addEventListener("click", numeros);

//Arrays
const array1 = [];
const array2 = [];
const operador = [];

function numeros(e) {
  // console.log(e.target.innerText);

  if (e.target.innerText === "+"|| e.target.innerText === "-" || e.target.innerText === "*" || e.target.innerText === "/" ) {
    console.log("esto es un operador");
    operador[0] = e.target.innerText;
  }
  if (e.target.innerText == 1|| e.target.innerText === '0' || e.target.innerText == 2 || e.target.innerText == 3 || e.target.innerText == 4 || e.target.innerText == 5 || e.target.innerText == 6 || e.target.innerText == 7 || e.target.innerText == 8 || e.target.innerText == 9) {
    console.log('Esto es un numero');
  }
  if (e.target.innerText === "=") {
    console.log('Estas pidiendo el resultado');
  } 
    
   
    
  console.log(operador);

  // if (operador.length === 0) {
  //   array1.push(e.target.innerText);
  // } else {
  //   console.log("array con cosas");
  // }
  // console.log(array1);
}
// });
