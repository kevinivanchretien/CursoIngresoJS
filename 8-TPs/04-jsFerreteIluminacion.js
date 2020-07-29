/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
    let vLampara;
    let vMarca;
    let vParcial;
    let vDescuento = parseInt;
    let vPrecio = 35;
    let vFinal = parseInt;
    let vIIBB;

    vLampara = parseInt(document.getElementById("txtIdCantidad").value);
    vMarca = document.getElementById("Marca").value;


    if (vLampara == 6) {
        vParcial = (vLampara * vPrecio);
        vDescuento = 0.5;
        vFinal = vParcial * vDescuento

        document.getElementById("txtIdprecioDescuento").value = vFinal;
    }
    if (vLampara == 5 && vMarca == "ArgentinaLuz") {
        vParcial = (vLampara * vPrecio)
        vDescuento =  0.4
        vFinal= vParcial * vDescuento
        alert(+vFinal);
        //document.getElementById("txtIdprecioDescuento").value = vFinal;
    }
    else {
        vParcial = (vLampara * vPrecio);
        vDescuento = vParcial * 0.30
        if (vDescuento <= 120) {
            vfinal = vDescuento * 0.1
        document.getElementById("txtIdprecioDescuento").value = vFinal;
    }

}
        
    }




 	
}
