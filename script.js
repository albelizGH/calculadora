const input = document.getElementById("input");
const output = document.getElementById("output");

function calcularResultado() {
	let ingresoUsuario = input.value;
	try {
		let resultado = math.evaluate(ingresoUsuario);
		resultado = parseFloat(resultado.toFixed(2));
		mostrarResultado(resultado);
	} catch (error) {
		mostrarResultado("Error de sintaxis");
	}
}

function mostrarResultado(resultadoAMostrar) {
	console.log(resultadoAMostrar);
	output.innerText = resultadoAMostrar;
}

function borrarPantalla() {
	input.value = "";
	output.innerText = "";
}

function escribirBotonEnPantalla(event) {
	const boton = event.target;
	let valorBoton = boton.innerText;

	if (valorBoton === "x") {
		valorBoton = "*";
	}

	if (valorBoton === "%") {
		valorBoton = "/";
	}

	input.value += valorBoton; // Agregar el valor del botón al campo de entrada
}

function borrarCaracter() {
	let numeroNuevo = input.value.slice(0, -1);
	input.value = numeroNuevo;
}
