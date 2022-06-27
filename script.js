window.onload=()=>{
  obtenervalorDolarOficial();
  obtenerValorDolarBlue();
  obtenerValorEuro();
  obtenerValorReal();
}

//---------------- array de monedas---------------

const listaMonedas=[];
console.log(listaMonedas);

const listaDolaroficial=[];
console.log(listaDolaroficial);

const listaDolarblue=[];
console.log(listaDolarblue);

const listaEuro=[];
console.log(listaEuro);

const listaReal=[];
console.log(listaReal);

//--------------CONSTRUCTOR DE MONEDAS---------------

function Moneda (nombre, cotizacion,) {
    this.nombre = nombre;
    this.cotizacion= cotizacion;
    }

    const dolaroficial = new Moneda("dolaroficial",123);
    listaMonedas.push(dolaroficial);
    const dolarBLue = new Moneda("dolarblue",221);
    listaMonedas.push(dolarBLue);
    const euro = new Moneda("euro", 126);
    listaMonedas.push(euro);
    const real = new Moneda ("real", 22);
    listaMonedas.push(real);

 



let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", convertidor);

//-----------FUNCION PRINCIPAL---------------

function convertidor (e) {
     
  e.preventDefault();
    let total= 0
    let pesos = parseInt(document.getElementById("pesos").value);
    let monedaBuscada = document.getElementById("moneda").value;
    let moneda = listaMonedas.find( moneda => moneda.nombre == monedaBuscada );
    let resultado= pesos / moneda.cotizacion;

    Toastify({
      text: "Convertiste en "+moneda.nombre,
      duration: 2000,
      gravity: 'top',
      position: 'left',
  }).showToast();

    if (monedaBuscada=="dolaroficial"){
      listaDolaroficial.push(resultado);
      console.log(listaDolaroficial);
      imprimirDolaroficial(resultado);
      for (const valor of listaDolaroficial) {
        total += resultado;
      }
      console.log("Dolares Oficiales totales $" + total);
    }else if(monedaBuscada=="dolarblue"){
      listaDolarblue.push(resultado);
      console.log(listaDolarblue);
      imprimirDolarblue(resultado);
      for (const valor of listaDolarblue) {
        total += resultado;
      }
      console.log("Dolares Blue totales $" + total);
    }else if(monedaBuscada=="euro"){
      listaEuro.push(resultado);
      console.log(listaEuro);
      imprimirEuro(resultado);
      for (const valor of listaEuro) {
       total += resultado;
      }
      console.log("Euros totales $" + total);
    }else if(monedaBuscada=="real"){
      listaReal.push(resultado);
      console.log(listaReal);
      imprimirReal(resultado);
      for (const valor of listaReal) {
      total += resultado;
      }
      console.log("Real totales $" + total);
    }
  };

//------FUNCIONES innerHTML---------


function imprimirDolaroficial(resultado){
  
  document.getElementById('tabla1').innerHTML+=`
    <tr>
      <td>${resultado}</td>
    </tr>`;
};

function imprimirDolarblue(resultado){
  
  document.getElementById('tabla2').innerHTML+=`
    <tr>
      <td>${resultado}</td>
    </tr>`;
};

function imprimirEuro(resultado){
  
  document.getElementById('tabla3').innerHTML+=`
    <tr>
      <td>${resultado}</td>
    </tr>`;
};

function imprimirReal(resultado){
  
  document.getElementById('tabla4').innerHTML+=`
    <tr>
      <td>${resultado}</td>
    </tr>`;
};
  

//---------BOTON DARK MODE--------------

let modo=localStorage.getItem("modo")  || "light";
let botonDarkMode = document.getElementById("mode");
document.body.className=modo;
localStorage.setItem("modo", modo);

botonDarkMode.onclick=()=>{
  if(modo=="light"){
    document.body.className="dark";
    modo="dark"
    botonDarkMode.innerHTML="light Mode";
  }else{
    document.body.className="light";
    modo="light"
    botonDarkMode.innerHTML="Dark Mode";
  }
  localStorage.setItem("modo", modo);
};


//------------- Boton mostrar formulario----------------

function mostrarFormulario() {
    document.getElementById("formulario").classList.toggle("oculto");
    document.getElementById("cotizacion").classList.toggle("oculto");
};

let mostrarMenu = document.getElementById("mostrarMenu");
mostrarMenu.addEventListener("click", () => mostrarFormulario());



// ----------------------API DE MONEDAS--------------------------

async function obtenervalorDolarOficial() {
  const URLDOLAR = "https://api-dolar-argentina.herokuapp.com/api/dolaroficial";
  const resp=await fetch(URLDOLAR)
  const data=await resp.json()
  document.getElementById("valorDolarOficial").innerHTML+=(`<p align="center"> Dolar Oficial = $ ${data.compra}</p>`);
  dolarOficialCotiz=data.compra;
}

async function obtenerValorDolarBlue() {
  const URLDOLAR = "https://api-dolar-argentina.herokuapp.com/api/dolarblue";
  const resp=await fetch(URLDOLAR)
  const data=await resp.json()
  document.getElementById("valorDolarBlue").innerHTML+=(`<p align="center"> Dolar Blue = $ ${data.compra}</p>`);
  dolarBlueCotiz=data.compra;
}

async function obtenerValorEuro() {
  const URLDOLAR = "https://api-dolar-argentina.herokuapp.com/api/euro/nacion";
  const resp=await fetch(URLDOLAR)
  const data=await resp.json()
  document.getElementById("valorEuro").innerHTML+=(`<p align="center"> Euro = $ ${data.compra}</p>`);
  euroCotiz=data.compra;
}

async function obtenerValorReal() {
  const URLDOLAR = "https://api-dolar-argentina.herokuapp.com/api/real/nacion";
  const resp=await fetch(URLDOLAR)
  const data=await resp.json()
  document.getElementById("ValorReal").innerHTML+=(`<p align="center"> Real = $ ${data.compra}</p>`);
  realCotiz=data.compra;
}