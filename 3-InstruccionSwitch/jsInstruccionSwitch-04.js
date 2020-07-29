function mostrar() {
	let vMes;
	vMes = document.getElementById("txtIdMes").value;

	switch (vMes) {
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			alert("Si tiene 31 dias");
			break;

		case "Febrero":
			alert("tiene 28 dias");
			break;
		default:
			alert("tienen 30 dias");
			break;

			


	}
	  //alert("igual todos los meses tienen 28 dias");







}//FIN DE LA FUNCIÓN