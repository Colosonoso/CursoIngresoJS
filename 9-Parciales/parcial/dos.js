function Mostrar()
{
  var importe;
  var importeFinal;

importe=parseFloat(prompt("Ingrese un importe del producto"));

importeFinal=importe *1.21;

document.getElementById("importeFinal").value=importeFinal;

//Este ejercicio es para cuando te pide hacerlo por ID
}
