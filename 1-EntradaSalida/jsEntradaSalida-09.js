/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var a;
	var b;
	a=parseInt(document.getElementById("txtIdSueldo").value);
	
	b= a + (a*0.1)
	

	document.getElementById("txtIdResultado").value = b;



	//alert("ok"); 
}
