/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar() {
	var claveIngresada;
	claveIngresada = prompt("ingrese la clave.");

	while (claveIngresada != "utn750") 
	{
		claveIngresada = prompt("ingrese la número clave.");

	}
	alert("la clave es correcta");

}//FIN DE LA FUNCIÓN
