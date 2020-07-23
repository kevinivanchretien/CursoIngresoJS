/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var a;
	var b;
	var result;
	a = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	b= parseInt(document.getElementById("txtIdNumeroDivisor").value);

	result= a % b;

	alert("el resto es: " +result);
}
