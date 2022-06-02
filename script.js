function Moneda (nombre, cotizacion,) {
    this.nombre = nombre;
    this.cotizacion= cotizacion;
    }

const dolar = new Moneda ("dolar",200);
const dolarAJson=JSON.stringify(dolar);
localStorage.setItem("DolaresJSON", dolarAJson);

const euro = new Moneda ("euro", 124);
const euroAJson=JSON.stringify(euro);
localStorage.setItem("EuroJSON", euroAJson);

const yen = new Moneda ("yen", 0.90);
const yenAJson=JSON.stringify(yen);
localStorage.setItem("YenesJSON", yenAJson);

const libra = new Moneda ("libra", 145);
const libraAJson=JSON.stringify(libra);
localStorage.setItem("LibrasJSON", libraAJson);



    
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
              for (const valor of listaDolar) {
                total += resultadoD;
              }
              console.log("Dolares totales $" + total);
              localStorage.setItem("Dolares", listaDolar);
            break;
         case "euro":
             let resultadoE = pesos / euro.cotizacion ;
              listaEuro.push(resultadoE);
              console.log(listaEuro);
              for (const valor of listaEuro) {
                total += resultadoE;
              }
              console.log("Euros totales $" + total);
              localStorage.setItem("Euros", listaEuro);
             break;
         case "yen":
             let resultadoY = pesos / yen.cotizacion;
             listaYen.push(resultadoY);
             console.log(listaYen);
             for (const valor of listaYen) {
                total += resultadoY;
              }
              console.log("Yenes totales $" + total);
              localStorage.setItem("Yenes", listaYen);
             break;
         case "libra":
             let resultadoL = pesos / libra.cotizacion;
             listaLibra.push(resultadoL);
             console.log(listaLibra);
             for (const valor of listaLibra) {
                total += resultadoL;
              }
              console.log("Libras totales $" + total);
              localStorage.setItem("Libras", listaLibra);
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



function mostrarFormulario() {
    document.getElementById("formulario").classList.toggle("oculto");
};

let mostrarMenu = document.getElementById("mostrarMenu");
mostrarMenu.addEventListener("click", () => mostrarFormulario());



