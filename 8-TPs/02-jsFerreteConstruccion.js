/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let result;
    
    largo=parseInt(document.getElementById("txtIdLargo").value);
    ancho=parseInt(document.getElementById("txtIdAncho").value);
    result=(largo*2 + ancho*2) *3;

   
    alert(`Se debe comprar ${result}metros de alambre`);

}
function Circulo () 
{
    let radio;
    let result2;
    
    radio=parseFloat(document.getElementById("txtIdRadio").value);
    result2=((2*3.14)*radio)*3;
    alert(`Se debe comprar ${result2.toFixed(2)}metros de alambre`);

}
function Materiales () 
{
    let ancho;
    let largo;
    let result3;

    ancho=parseInt(document.getElementById("txtIdLargo").value);
    largo=parseInt(document.getElementById("txtIdAncho").value);
    result3= ancho*largo;
    alert(`Usted necesita ${result3 * 2} bolsas de cemento y ${result3 * 3} de cal`);
	
}
