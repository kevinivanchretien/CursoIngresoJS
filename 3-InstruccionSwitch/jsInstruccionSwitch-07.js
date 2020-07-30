function mostrar() {
	let Provincia = document.getElementById("txtIdDestino").value;

	switch (Provincia) {
		case "Bariloche":
			alert("Oeste");
			break;
		case "Mar del plata":
			alert("Este");
			break;
		case "Cataratas":
			alert("Norte");
			break;
		case "Ushuaia":
			alert("Sur");
			break;
	}
	//var destinoIngresado =txtIdDestino.value;
	//alert(destinoIngresado);

}//FIN DE LA FUNCIÓN