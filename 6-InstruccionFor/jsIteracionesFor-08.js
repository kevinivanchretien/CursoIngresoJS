function mostrar() {

	let num;
	let divisor = 0;
	do {
		num = parseInt(prompt("Ingrese un numero"));
	} while (num <= 1 || isNaN(num));

	for (let i = 2; i <= num; i++) {
		if (num % i == 0) {
			divisor++;
		}

	}
	if (divisor >= 2) {
		console.log(num + " no es primo ");

	}
	else {
		console.log(num + " es primo ");
	}
}