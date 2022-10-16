document.addEventListener("DOMContentLoaded", function () {
  eventListeners();
});

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

const numUno = 1;

function sumarArray(numero) {
  console.log(this.numero);
}

// const primerArray = () => sumarArray();

function eventListeners() {
  const cac = document.querySelector(".borrar");

  cac.addEventListener("click", borrar);
  uno.addEventListener("click", function sumarArray() {
    console.log("pueba");
  });
}

function borrar() {
  const pantalla = document.querySelector("#span-pant");

  pantalla.textContent = 0;
}
