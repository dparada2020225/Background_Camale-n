var inicio = 0;
var h1 = document.getElementById('nombre');


function numeroRamdomDouble(min, max) {
    return Math.random() * (max - min) + min;
  }
function coloresRamdom(){ 
    inicio = 0
    var numeroAleatorio1 = numeroRamdomDouble(0,1565)
    var numeroAleatorio2 = Math.round(numeroAleatorio1)
    document.getElementById('nombre').innerHTML ="Background color es: "+ colores[numeroAleatorio2].nombre;
    document.getElementById('body').style.backgroundColor ="#"+colores[numeroAleatorio2].color

}

    