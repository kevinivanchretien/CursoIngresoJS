/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var a;
	var b;
	var resul;
	
	a = parseInt(document.getElementById("txtIdNumeroUno").value);
	b = parseInt(document.getElementById("txtIdNumeroDos").value);

	resul= a+b;
	alert("el resultado es:" +resul);

	
}

function restar()
{
	
	a = parseFloat(document.getElementById("textIdNumeroUno").value);
	b = parseFloat(document.getElementById("textIdnumeroDos").value);
	resul = a - b;
   alert("el resultado es:" +resul.toFixed(6));


}


function multiplicar()
{
	a = parseInt(document.getElementById("txtIdNumeroUno").value);
	b = parseInt(document.getElementById("txtIdNumeroDos").value);
	resul = a*b;
 alert("el resultado es:" +resul);

}
function dividir()
{
	a = parseInt(document.getElementById("txtIdNumeroUno").value);
	b = parseInt(document.getElementById("txtIdNumeroDos").value);
	resul= a/b;
alert("el resultado es:" +resul);


	
}

