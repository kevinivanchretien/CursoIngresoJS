function mostrar() {
	let Provincia = document.getElementById("txtIdDestino").value;

	switch (Provincia) {
		case "Bariloche":
		case "Ushuaia":
			alert("Hace Frio");
			break;
		case "Cataratas":
		case "Mar del plata":
			alert("Hace Calor");
			break;
	}

	/*if (Provincia == "Bariloche" || Provincia == "Ushuaia") {
		alert("Hace Frio");
	}
	else {
		alert("Hace Calor");
	}*/
	//var destinoIngresado =txtIdDestino.value;
	//alert(destinoIngresado);

}//FIN DE LA FUNCIÓN