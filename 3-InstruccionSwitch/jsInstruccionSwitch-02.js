function mostrar() {
	//tomo el mes
	var mesDelAño;

	mesDelAño = document.getElementById("txtIdMes").value;

	switch (mesDelAño) {
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
		case "Enero":
		case "Febrero":
			alert("ya pasamos el frio ahora calor");
			break;
		case "Marzo":
		case "Abril":
		case "Mayo":
			alert("Falta para el invierno");
			break;
		case "Julio":
		case "Agosto":
			alert("abrigate que hace frio");
			break;


	}





}//FIN DE LA FUNCIÓN