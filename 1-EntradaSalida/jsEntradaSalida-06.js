/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var a;
	var b;
	var resultado;
	
	
	a = parseInt(document.getElementById("txtIdNumeroUno").value);
	
	b = parseInt(document.getElementById("txtIdNumeroDos").value);
	
	
	resultado = a + b;


	alert("La suma es: " + resultado);
}

