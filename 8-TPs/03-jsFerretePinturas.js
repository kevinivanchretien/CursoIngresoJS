/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var fahr;
    var cambio;

    fahr=parseInt(document.getElementById("txtIdTemperatura").value);
    cambio= ((fahr -32) * 5)/9;
    alert(+cambio.toFixed(2));
    
	
}

function CentigradosFahrenheit () 
{
 var centi;
 var cambio2;

 centi=parseInt(document.getElementById("txtIdTemperatura").value);
cambio2= ((centi*5)/9) +32;
alert(+cambio2.toFixed(2));

 
 
}
