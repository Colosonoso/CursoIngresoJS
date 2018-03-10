function Mostrar()
{
var importe;
var ventas;
var mayorimporte;
var menorimporte;
var flag=0;

for(var i=0; i<24; i++)
{

ventas=parseInt(prompt("Ingrese el importe "));

while(ventas < 0 )
{

ventas=parseInt(prompt("Error. Vuelva a ingresar el importe de la venta"));

}


if(ventas > mayorimporte || flag==0)
{


mayorimporte=ventas;



}

if(ventas < menorimporte || flag==0)

{

menorimporte=ventas;
flag=1;

}

}

alert("El mayorimporte es" + mayorimporte + "y el menor importe es " + menorimporte);

}