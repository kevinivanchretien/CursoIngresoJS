/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var nro1;
    var nro2;
    var nro3;
    var result;
    
    nro1=parseInt(document.getElementById("txtIdPrecioUno").value);
    nro2=parseInt(document.getElementById("txtIdPrecioDos").value);
    nro3=parseInt(document.getElementById("txtIdPrecioTres").value);

    result= nro1 + nro2 + nro3;
    alert("la suma es: " +result);
	
}
function Promedio () 
{
	nro1=parseInt(document.getElementById("txtIdPrecioUno").value);
    nro2=parseInt(document.getElementById("txtIdPrecioDos").value);
    nro3=parseInt(document.getElementById("txtIdPrecioTres").value);

    result= (nro1 + nro2 + nro3) / 3
    alert("el promedio es: " +result.toFixed(2));

}
function PrecioFinal () 
{
	nro1=parseInt(document.getElementById("txtIdPrecioUno").value);
    nro2=parseInt(document.getElementById("txtIdPrecioDos").value);
    nro3=parseInt(document.getElementById("txtIdPrecioTres").value);

    result=((nro1 + nro2 + nro3) *0.21) + nro1 + nro2 + nro3; 
    
    alert(+result);

}