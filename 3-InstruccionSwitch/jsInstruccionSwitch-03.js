function mostrar()
{
	//tomo el mes
	
	let vMes;
	vMes=document.getElementById("txtIdMes").value;
	switch(vMes){
		case "Febrero":
			alert("no tiene mas de 29 dias");
			break;
			default:
				alert("Este mes tiene 30 dias o mas");
				break;

	}
	
	
	


}//FIN DE LA FUNCIÓN