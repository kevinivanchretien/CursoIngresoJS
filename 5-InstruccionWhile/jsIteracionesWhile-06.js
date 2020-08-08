function mostrar() {
	let Numero;
	let Suma =0;
	let Contador=0;


	do {
		Numero = parseInt(prompt("ingrese un numero"));
		console.log(Numero);
		Suma= Suma + Numero;
		Contador=Contador +1;
	}
	while (Contador != 5)

	document.getElementById("txtIdSuma").value = Suma;
	document.getElementById("txtIdPromedio").value = Suma / Contador;
}//FIN DE LA FUNCIÓN