function Mostrar()
{
var num1;
var num2;
var multiplicación;
var resta;
var suma;

num1=parseInt(prompt("Ingrese un numero"));
num2=parseInt(prompt("ingrese otro numero"));

if(num1==num2)
{ 
multiplicación=num1 * num2;
document.write("el resultado es " + multiplicación);

}
else if(num1 > num2)
{


resta=num1 - num2;
document.write("el resultado es " + resta);

}
else
{

suma= num1 + num2;
document.write("el resultado es " + suma);
}

// si me pide ejercicio con CONCATENADO va el (parseInt(num1)>parseInt(num2)) en todos los IF
}
