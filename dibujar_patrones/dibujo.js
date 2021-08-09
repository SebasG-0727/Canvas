var texto = document.getElementById("texto_lineas")
var boton = document.getElementById("botoncito")
boton.addEventListener("click",dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea(color,x_inicial,y_inicial,x_final,y_final)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x_inicial,y_inicial);
    lienzo.lineTo(x_final,y_final);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick ()
{
    var x = parseInt(texto.value);
    var lineas = x;
    var l = 0;
    var xi,yi,xf,yf;
    var colorcito = "#FAA";
    var espacio = ancho / lineas;

    for(l=0;l < lineas;l++)
    {
        xi = espacio * (l + 1);
        yi = espacio * l;
        xf = espacio * (l + 1);
        yf = espacio * l;

        dibujarLinea(colorcito,0,yi,xf,300);
        dibujarLinea(colorcito,xi,0,300,yf);
    }

    dibujarLinea(colorcito,1,1,1,300);
    dibujarLinea(colorcito,1,299,299,299);
    dibujarLinea(colorcito,1,1,299,1);
    dibujarLinea(colorcito,299,1,299,299);

}

