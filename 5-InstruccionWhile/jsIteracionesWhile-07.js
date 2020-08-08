/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar() {
	let Contador = 0;
	let Suma = 0
	let Numero;
	let Pregunta;
	let Respuesta = "si";

	do 
	{
		Numero=parseInt(prompt("Ingrese un Nro"));
		Suma= Suma + Numero;
		Respuesta=prompt("desea continuar? si/no").toLowerCase();
		Contador= Contador +1;
		
		
	}while(Respuesta=="si")


	document.getElementById("txtIdSuma").value = Suma;
	document.getElementById("txtIdPromedio").value = Suma / Contador;

}//FIN DE LA FUNCIÓN