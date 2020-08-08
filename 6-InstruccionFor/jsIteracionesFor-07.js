function mostrar() {
	let divisor = 0;
	let num;

	num = parseInt(prompt("Ingrese un numero"));

	for (let i = 2; i <= num; i++) {
		if (num % i == 0) {

			console.log("se divide " + i);
			divisor++;

		}
	}
	console.log("se puede dividir " + divisor + " veces");


}//FIN DE LA FUNCIÓN