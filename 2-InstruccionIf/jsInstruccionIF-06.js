function mostrar()
{
	let vEdad;
	vEdad=parseInt(document.getElementById("txtIdEdad").value);
	if(vEdad<13){
		alert("La persona es una niño");
	}
	
	else if(vEdad <=17){
		alert("La persona es adolescente");
	}
	else {
		alert("La persona es mayor de edad")
	}
	
	//tomo la edad  
	//alert("ok");



}//FIN DE LA FUNCIÓN