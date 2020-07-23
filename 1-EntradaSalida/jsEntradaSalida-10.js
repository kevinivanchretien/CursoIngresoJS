/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var a;
	var b;

	a = parsefloat(document.getElementById("txtIdImporte").value);
	b = a - (a *25)/100  
	document.getElementById("txtIdResultado").value = b;
	
	//alert("ok");
}
