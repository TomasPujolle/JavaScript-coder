let dolar = 198.5
let euro =123.28
let yen =0.90
let libra =144.08 

function convertidor(pesos, dolar, euro, yen, libra, moneda) {
    switch (moneda) {
        case "dolar":
            return pesos / dolar;
            break;
        case "euro":
            return pesos / euro;
            break;
        case "yen":
            return pesos / yen;
            break;
        case "libra":
            return pesos / libra;
            break;
        default:
            return error;
            break;
    }
};

 
let salir = "1";
while(salir == "1"){
    let pesos=parseInt(prompt("Ingresa valor en pesos Argentinos"));
    let moneda=prompt("Elegir entre: \n dolar \n euro \n yen \n libra");
    let resultado=convertidor(pesos, dolar, euro, yen, libra, moneda);
    console.log("Resultado de la conversion = $"+resultado);
    alert("Total en la moneda seleccionada es: $"+resultado);
    salir=prompt("1 - Para seguir convirtiendo \n 2 - para salir ");
}

//Array

const monedas=[

    {
        moneda:"dolar",
        cotizacion:198.5,
        origen:"EEUU",
    },
    {
        moneda:"euro",
        cotizacion:123.28,
        origen:"Union Europea",
    },
    {
        moneda:"yen",
        cotizacion:0.90,
        origen:"Japon",
    },
    {
        moneda:"libra",
        cotizacion:144.08,
        origen:"EEUU",
    }, 
];

for(const moneda of monedas){
    console.log(moneda)
};