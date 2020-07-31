/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar() {
	var Numero;
	do {
		Numero = prompt("ingrese un número entre 0 y 10.");
	}
	while (Numero > 10)

	document.getElementById("txtIdNumero").value = Numero;

}//FIN DE LA FUNCIÓN