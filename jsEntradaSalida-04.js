/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var adato;
	adato = prompt ("ingresar dato", "dato");
	
    document.getElementeById("txtIdNombre").value = adato;

	
}


