function mostrar() {
	let Estacion = document.getElementById("txtIdEstacion").value;
	let Provincia = document.getElementById("txtIdDestino").value;
	const Precio = 15000;
	let Descuento;
	let PrecioFinal;

	switch (Estacion) {
		case "Invierno":
			switch (Provincia) {
				case "Bariloche":
					Descuento = (Precio * 20) / 100;
					PrecioFinal = Precio + Descuento;
					alert("Costo de la estadia: " + PrecioFinal);
				break;

				case "Cataratas":
				case "Cordoba":
					Descuento = (Precio * 10) / 100;
					PrecioFinal = Precio - Descuento;
					alert("Costo de la estadia: " + PrecioFinal);
				break;

				case "Mar del plata":
					Descuento = (Precio * 20) / 100;
					PrecioFinal = Precio - Descuento;
					alert("Costo de la estadia: " + PrecioFinal);
				break;
			}
		break;

		case "Verano":
			switch (Provincia) {
				case "Bariloche":
					Descuento = (Precio * 20) / 100;
					PrecioFinal = Precio - Descuento;
					alert("el costo del viaje: " + PrecioFinal);
				break;

				case "Cataratas":
				case "Cordoba":
					Descuento = (Precio * 10) / 100;
					PrecioFinal = Precio + Descuento;
					alert("el costo del viaje: " + PrecioFinal);
				break;

				case "Mar del plata":
					Descuento = (Precio * 20) / 100;
					PrecioFinal = Precio + Descuento;
					alert("el costo del viaje: " + PrecioFinal);
				break;
			}
		break;

		case "Otoño":
		case "Primavera":
			switch (Provincia) {
				case "Bariloche":
				case "Mar del plata":
				case "Cataratas":
					Descuento = (Precio * 10) / 100;
					PrecioFinal = Precio + Descuento;
					alert("el costo del viaje: " + PrecioFinal);
					break;
					default:
					alert("el costo del viaje: " +Precio);

			}
		break;




	}





	//var estacionIngresada =txtIdEstacion.value;
	//alert(estacionIngresada);

}//FIN DE LA FUNCIÓN