/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar() {
	let Genero;
	do {
		Genero = prompt("ingrese f ó m .");
	}
	while (Genero != "f" && Genero != "m")

	document.getElementById("txtIdSexo").value = Genero;
}//FIN DE LA FUNCIÓN