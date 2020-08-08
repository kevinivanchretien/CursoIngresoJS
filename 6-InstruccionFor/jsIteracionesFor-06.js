function mostrar() {
	let num = parseInt(prompt("Ingrese un numero"));
	let contador = 0;
	let cont = 0;

	for (let i = 1; i <= num; i++) {
		if (i % 2 == 0) {
			console.log("el numero " + i + "es par")
			contador++
		}
		else {
			cont++
		}
	}
	alert("se encontraron " + contador + "numeros pares");
	alert("se encontraron " + cont + "numeros impares");



}//FIN DE LA FUNCIÓN