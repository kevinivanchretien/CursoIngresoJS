function mostrar() {
	let Estacion = document.getElementById("txtIdEstacion").value;
	let Provincia = document.getElementById("txtIdDestino").value;

	if (Estacion == "Invierno") {
		switch (Provincia) {
			case "Bariloche":
				alert("Se viaja");
				break;
			default:
				alert("No se viaja");
		}
	}
	else if (Estacion == "Verano") {
		switch (Provincia) {
			case "Mar del plata":
			case "Cataratas":
				alert("Se viaja");
				break;

			default:
				alert("No se viaja");

		}

	}
	else if (Estacion == "Primavera") {
		switch (Provincia) {
			case "Bariloche":
				alert("No se viaja");
				break;
			default:
				alert("Se viaja");

		}
	}
	else if (Estacion == "Otoño") {
		alert("se viaja");
	}


	//	var estacionIngresada =txtIdEstacion.value;
	//	alert(estacionIngresada);

}//FIN DE LA FUNCIÓN