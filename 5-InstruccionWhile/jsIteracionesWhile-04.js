/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.
function mostrar() {
	let Numero;
	do {
		Numero = parseInt(prompt("ingrese un número entre 0 y 10."));
	}
	while (Numero >9 || Numero <0)

	document.getElementById("txtIdNumero").value = Numero;*/

//}//FIN DE LA FUNCIÓN
/*Enunciado 
b)”sin banderas”
Se debe ingresar 10:
nombre
edad(0 y 115)
altura(30 y 230)
sexo
Dinero(puede ser positivo o negativo, pero debe ser un número)
CantidadDeHijos(0 y 10)
despues de validar todos los datos,
se debe informar:

1- nombre de la persona con edad más vieja
2- promedio de altura de las mujeres
3- nombre de la mujer más joven
NOTA:pedir datos por "prompt()" y mostrar por console.log(),
verificar que los datos  exitan antes de mostrarlos*/
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