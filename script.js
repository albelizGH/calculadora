const pantallaIngreso = document.getElementById("input");
const pantallaSalida = document.getElementById("output");
const teclas = document.querySelectorAll(".tecla");
const teclasAlargadas = document.querySelectorAll(".tecla-alargada");

teclas.forEach((boton) => {
	boton.addEventListener("click", () => {
		valorTecla = boton.textContent;

		if (pantallaSalida != "") {
			borrarPantallaSalida();
		}
		if (valorTecla == "⬅") {
			borrarUltimoCaracter();
			return;
		}
		if (valorTecla == "=") {
			calcular();
			return;
		}
		pantallaIngreso.value += valorTecla;
	});
});

teclasAlargadas.forEach((boton) => {
	boton.addEventListener("click", () => {
		valorTecla = boton.textContent;
		if (valorTecla == "C") {
			borrarPantalla();
			pantallaSalida.textContent = 0;
			return;
		}
		pantallaIngreso.value += valorTecla;
	});
});

function borrarPantalla() {
	pantallaIngreso.value = "";
	pantallaSalida.textContent = "";
}

function borrarPantallaSalida() {
	pantallaSalida.textContent = "";
}

function borrarUltimoCaracter() {
	let valor = pantallaIngreso.value.slice(0, pantallaIngreso.value.length - 1);
	pantallaIngreso.value = valor;
}

function calcular() {
	console.log(pantallaIngreso.value);
	let contenidoPantalla = pantallaIngreso.value;
	contenidoPantalla = contenidoPantalla.replaceAll("x", "*");
	contenidoPantalla = contenidoPantalla.replaceAll("÷", "/");

	let resultado = eval(contenidoPantalla);

	if (Number.isInteger(resultado)) {
		//Si la division es entera imprimimos asi
		pantallaSalida.textContent = resultado;
	} else {
		resultado = resultado.toFixed(6); //Usamos 6 cifras

		let resultadoTexto = toString(resultado);
		let indicePunto = resultadoTexto.indexOf(".");
		for (let i = indicePunto; i < resultado.length; i++) {
			resultadoTexto = resultado.replaceAll("0", ""); //Quitamos los 0 innecesarios luego del .
		}
		resultado = parseFloat(resultadoTexto);
		pantallaSalida.textContent = resultado;
	}
}
