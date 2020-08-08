/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). 
function mostrar() {
	let numero;
	let positivos = 0;
	let negativos = 0;
	let contadorP = 0;
	let contadorN = 0;
	let contadorX = 0;
	let contadorPar = 0;
	let PromedioP;
	let PromedioN;
	let diferencia;
	let respuesta = "si";

	while (respuesta == "si") {

		numero = parseInt(prompt("Ingrese un numero"));
		if (numero < 0) {
			negativos = negativos + numero;
			contadorN++
		}
		else if (numero > 0) {
			positivos = positivos + numero;
			contadorP++
		}
		else if (numero == 0) {
			contadorX++
		}
		if (numero % 2 == 0) {
			contadorPar++
		}

		respuesta = prompt("desea continuos? si/no");
	}


	PromedioN = negativos / contadorN;
	PromedioP = positivos / contadorP;
	diferencia = ((positivos) + (negativos));




	document.writeln("la suma de negativos es :" + negativos + "<br>");
	document.writeIn("cantidad de negativos ingresados: " + acumuladorN + "<br>");
	document.writeIn("el promedio de los negativos es: " + PromedioN) + "<br>");
	document.write("La suma de positivos es:" + positivos + "<br>");
	document.write("cantidad de oisitivos ingresado: " + acumuladorP + "<br>");
	document.write("el promedio de positivos es: " + PromedioP + "<br>");
	document.write("cantidad de 0: " + contadorX + "<br>");
	document.write("cantidad de numeros par: " + diferencia);

}//FIN DE LA FUNCIÓN*/
function mostrar() {
	let i;
	let nombre;
	let edad;
	let altura;
	let sexo;
	let dinero;
	let hijos;

	let nomayorEdad;
	let edadmayor = 0;


	let alturaPromedio;
	let acumMujeres = 0;
	let contMujeres = 0;
	let menoredad = 115;
	let nomjoven;


	for (i = 1; i <= 4; i++) {
		
			nombre = prompt("Ingrese un nombre");
		
		do {
			edad = parseInt(prompt("Ingrese su edad"));
		} while ((edad > 0 && edad <= 115) && (edad == isNaN));
		do {
			sexo = prompt("Ingrese su Genero  f/m");
		} while (sexo != "f" && sexo != "m");
		do {
			altura = parseFloat(prompt("Ingrese su altura"));
		} while (altura == isNaN);
		dinero = parseInt(prompt("ingrese dinero"));
		do {
			hijos = parseInt(prompt("Ingrese cuantos hijos tiene"));
		} while (hijos <= 0 || hijos > 10);


		if (edad > edadmayor) {
			edadmayor = edad;
			nomayorEdad = nombre;
		}

		switch (sexo) {
			case "f":
				acumMujeres = acumMujeres + altura;
				contMujeres++;
				alturaPromedio = acumMujeres / contMujeres;

				if (edad < menoredad) {
					menoredad = edad;
					nomjoven = nombre
				}


		}

	}
	/*1- nombre de la persona con edad más vieja
2- promedio de altura de las mujeres
3- nombre de la mujer más joven*/

	console.log(nomayorEdad + " es la persona con mas edad con " + edadmayor);
	console.log("El promedio de alturade las mujeres es: " + alturaPromedio);
	console.log(nomjoven + " es la mujer mas joven");
}