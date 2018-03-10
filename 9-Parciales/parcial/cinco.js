function Mostrar()
{
var diadesemana;

diadesemana=prompt("Ingrese un dia de semana");

switch(diadesemana)
{
case"Sabado":
case"Domingo":
alert("Es fin de semana");
break;

    

default:
alert("A trabajar!!!");
break;
}


}