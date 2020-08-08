/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
function mostrar() {	// declarar variables
	let Numero;
	let Maximo;
	let Minimo;
	let respuesta = "si";
	let i = 0;

	do {
		Numero = parseInt(prompt("Ingrese un numero"));
		i++
		if (i == "1") {
			Maximo = Numero;
			Minimo = Numero;
		}
		if (i > 1 && Numero > Maximo) {

			Maximo = Numero;
		}
		else if (i > 1 && Numero < Minimo) {
			Minimo = Numero;
		}
		respuesta = prompt("Desea continuar: si/no").toLowerCase();
	}
	while (respuesta == "si")

	document.getElementById("txtIdMaximo").value = Maximo;
	document.getElementById("txtIdMinimo").value = Minimo;
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


	for (i = 1; i <= 10; i++) {
		do {
			nombre = prompt("Ingrese un nombre");
		} while (nombre != isNan);
		do {
			edad = parseInt(prompt("Ingrese su edad"));
		} while ((edad > 0 && edad <= 115) && (edad == isNaN));
		do {
			sexo = prompt("Ingrese su Genero  f/m");
		} while (sexo != f || sexo != m);
		do {
			altura = parseFloat(prompt("Ingrese su altura"));
		} while (altura == isNaN);
		dinero = parseInt(prompt("ingrese dinero"));
		do {
			hijos = parseInt(prompt("Ingrese cuantos hijos tiene"));
		} while (hijos <= 0 && hijos > 10);


		if (edad < edadmayor) {
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

	console.log(+nomayorEdad + " es la persona con mas edad con " + edadmayor);
	console.log("El promedio de alturade las mujeres es: " + alturaPromedio);
	console.log(nomjoven + " es la mujer mas joven");
}