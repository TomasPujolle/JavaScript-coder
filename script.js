function Moneda (nombre, cotizacion,) {
    this.nombre = nombre;
    this.cotizacion= cotizacion;
    }

const dolar = new Moneda ("dolar",200);
const euro = new Moneda ("euro", 124);
const yen = new Moneda ("yen", 0.90);
const libra = new Moneda ("libra", 145);



    
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", convertidor);



 function convertidor (e) {
     
     e.preventDefault();
     let total= 0
    let pesos = document.getElementById("pesos").value;
    let moneda = document.getElementById("moneda").value;

     switch (moneda) {
         case "dolar":
            let resultadoD = pesos / dolar.cotizacion ;
              listaDolar.push(resultadoD);
              console.log(listaDolar);
              alert("Total en la moneda seleccionada es: $"+resultadoD);
              for (const valor of listaDolar) {
                total += resultadoD;
              }
              console.log("Dolares totales $" + total);
            break;
         case "euro":
             let resultadoE = pesos / euro.cotizacion ;
              listaEuro.push(resultadoE);
              console.log(listaEuro);
              alert("Total en la moneda seleccionada es: $"+resultadoE);
              for (const valor of listaEuro) {
                total += resultadoE;
              }
              console.log("Euros totales $" + total);
             break;
         case "yen":
             let resultadoY = pesos / yen.cotizacion;
             listaYen.push(resultadoY);
             console.log(listaYen);
             alert("Total en la moneda seleccionada es: $"+resultadoY);
             for (const valor of listaYen) {
                total += resultadoY;
              }
              console.log("Yenes totales $" + total);
             break;
         case "libra":
             let resultadoL = pesos / libra.cotizacion;
             listaLibra.push(resultadoL);
             console.log(listaLibra);
             alert("Total en la moneda seleccionada es: $"+resultadoL);
             for (const valor of listaLibra) {
                total += resultadoL;
              }
              console.log("Libras totales $" + total);
             break;
         default:
             alert("error, vuelva a intentar");
             break;
     }
 };

// array de monedas

const listaDolar=[];
console.log(listaDolar);

const listaEuro=[];
console.log(listaEuro);

const listaYen=[];
console.log(listaYen);

const listaLibra=[];
console.log(listaLibra);

const listaListas=[listaDolar, listaEuro, listaYen, listaLibra];


function cambiarTema() {
    document.body.classList.toggle("darkMode");
};

function mostrarFormulario() {
    document.getElementById("formulario").classList.toggle("oculto");
};

let botonDarkMode = document.getElementById("darkMode");
botonDarkMode.addEventListener("click", () => cambiarTema());

let mostrarMenu = document.getElementById("mostrarMenu");
mostrarMenu.addEventListener("click", () => mostrarFormulario());



