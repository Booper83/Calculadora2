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
suma.addEventListener("click", sumaOperador);
// resta.addEventListener("click", restaOperador);
// multi.addEventListener("click", multiOperador);
// dividir.addEventListener("click", dividirOperador);
// igual.addEventListener("click", resultado);
cac.addEventListener("click", borrarPantalla);

//Arrays
const array1 = [];
const array2 = [];
const operador = [];

function numeros(e) {
 
  if (operador == '') {
    // if (e.target.innerText == 1|| e.target.innerText === '0' || e.target.innerText == 2 || e.target.innerText == 3 || e.target.innerText == 4 || e.target.innerText == 5 || e.target.innerText == 6 || e.target.innerText == 7 || e.target.innerText == 8 || e.target.innerText == 9) {
      console.log('Esto es un numero');
      array1.push(e.target.innerText);
      ponerPantalla();
  
}
  if (operador != '') {
    array2.push(e.target.innerText);
    ponerPantalla();
  } 
      
  console.log(operador);
  console.log(array1);
  console.log(array2);
}

function ponerPantalla(){
  console.log('colocando en pantalla');
  if (operador == '') {
    let suma1 = '';
    for (let i = 0; i < array1.length; i++) {
      suma1 += array1[i]      
    }
    pant.innerText = suma1;
    console.log(suma1);
  } 
  if (operador != ''){
    let numAnt = pant.innerText;
    let suma2 = '';
    for (let i = 0; i < array2.length; i++) {
      suma2 += array2[i];      
    }
    pant.innerText = numAnt +suma2;
  }
}

function sumaOperador(e){
  console.log('añadiendo operador al array');
  let suma1 = '';
  for (let i = 0; i < array1.length; i++) {
    suma1 += array1[i]      
  }
  let suma2 = '';
  for (let i = 0; i < array2.length; i++) {
    suma2 += array2[i];      
  }

  pant.innerText = suma1 + suma2;
}



function borrarPantalla(e){
  console.log('borrando');
  pant.innerText= 0;
  array1.length = 0;
  array2.length = 0;
  operador.length = 0;
  console.log(array1);
  console.log(array2);

}
