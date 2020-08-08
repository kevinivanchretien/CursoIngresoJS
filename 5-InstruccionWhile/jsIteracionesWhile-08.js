/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {
	//let contador = 0;
	let Numero;
	let respuesta= "si";
	let Positivos=0;
	let Negativos=1;

	
	
	while (respuesta == "si"){
		Numero = parseInt(prompt("ingrese un número"));
		if(Numero >=0){
			Positivos=Positivos+Numero;
		}
		else {
			Negativos=Negativos * Numero;
		}
		respuesta=prompt("desea continuar? si/no").toLowerCase();
		console.log(Numero);

	}
	


	document.getElementById("txtIdSuma").value = Positivos;
	document.getElementById("txtIdProducto").value = Negativos;

}//FIN DE LA FUNCIÓN