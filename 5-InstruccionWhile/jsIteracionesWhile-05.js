/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar() {
	let Genero;
	
	do {
		Genero = prompt("ingrese f ó m .").toLowerCase();
	}
	while (Genero != "f" && Genero != "m")
	if(Genero== "f"){
		document.getElementById("txtIdSexo").value = "Femenino";}
	else{
		document.getElementById("txtIdSexo").value = "Masculino";}

	//document.getElementById("txtIdSexo").value = Genero;
	
}//FIN DE LA FUNCIÓN