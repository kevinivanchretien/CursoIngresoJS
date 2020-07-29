function mostrar()
{
	let NroMax = 10;
	let NroMi = 1;
	let result;

	result = Math.round(Math.random () * (NroMax - NroMi) + NroMi);
	
	if (result >=9){
		alert("EXCELENTE: " +result);
	}	
	else if (result <4){
        alert("Vamos, la proxima se puede: " +result);
	}
	else{
		alert("APROBO: " +result);
	}
	
	
	
	//Genero el número RANDOM entre 1 y 10 
	//alert("ok");

}//FIN DE LA FUNCIÓN