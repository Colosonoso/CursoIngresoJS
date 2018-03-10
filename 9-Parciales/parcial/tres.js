function Mostrar()
{
var largo;
var ancho;
var perimetro;
var alambre;

largo=parseInt(document.getElementById("ancho").value);
ancho=parseInt(document.getElementById("largo").value);

perimetro=(largo+ancho)*2;

alambre=perimetro*3;

alert(" Se necesitan " + alambre + " de alambre");

}
