function mostrar()
{
	let vEdad;
	let vEstado;

	vEdad=parseInt(document.getElementById("txtIdEdad").value);
	vEstado=document.getElementById("estadoCivil").value;

	if(vEdad <18) 
	{
		if(vEstado != "Soltero"){
		alert("Es muy pequeño para NO ser soltero");
	}
    }


	//tomo la edad  
	//alert("ok");
	


}//FIN DE LA FUNCIÓN