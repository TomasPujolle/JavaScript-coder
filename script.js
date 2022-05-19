function Moneda (nombre, cotizacion,) {
    this.nombre = nombre;
    this.cotizacion= cotizacion;
    }

const dolar = new Moneda ("dolar",200);
const euro = new Moneda ("euro", 124);
const yen = new Moneda ("yen", 0.90);
const libra = new Moneda ("libra", 145);

function convertidor(pesos, dolar, euro, yen, libra, moneda) {
    switch (moneda) {
        case "dolar":
           let resultadoD = pesos / dolar.cotizacion ;
             listaDolar.push(resultadoD);
             alert("Total en la moneda seleccionada es: $"+resultadoD);
            break;
        case "euro":
            let resultadoE = pesos / euro.cotizacion ;
             listaEuro.push(resultadoE);
             alert("Total en la moneda seleccionada es: $"+resultadoE);
            break;
        case "yen":
            let resultadoY = pesos / yen.cotizacion;
            listaYen.push(resultadoY);
            alert("Total en la moneda seleccionada es: $"+resultadoY);
            break;
        case "libra":
            let resultadoL = pesos / libra.cotizacion;
            listaLibra.push(resultadoL);
            alert("Total en la moneda seleccionada es: $"+resultadoL);
            break;
        default:
            alert("error, el nombre no pertenece a una moneda");
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



let salir = "1";
while(salir == "1"){
    let pesos=parseInt(prompt("Ingresa valor en pesos Argentinos"));
    let moneda=prompt("Elegir entre: \n dolar \n euro \n yen \n libra");
    convertidor(pesos, dolar, euro, yen, libra, moneda);
    salir=prompt("1 - Para seguir convirtiendo \n 2 - para salir ");
    
    
}

for (const lista of listaListas){
 

        function realizar(operacion,lista){
            for(const elemento of lista){
                operacion(elemento);
            }

        }

    
        let total= 0

        function sumarTotal(conversion){
            total+=conversion;
        }

        if(lista==listaDolar){

             realizar(sumarTotal,lista);
        console.log ("Total cambiado en DOLARES $"+total);
        }

        else if(lista==listaEuro){

            realizar(sumarTotal,lista);
            console.log ("Total cambiado en EUROS $"+total);
       }

       else if(lista==listaYen){

        realizar(sumarTotal,lista);
        console.log ("Total cambiado en YENES $"+total);
        }

        else if(lista==listaLibra){

        realizar(sumarTotal,lista);
        console.log ("Total cambiado en LIBRAS $"+total);
        }
};
 

