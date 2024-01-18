document.addEventListener("DOMContentLoaded", function () {
  let campo1 = document.getElementById("campo1");
  let campo2 = document.getElementById("campo2");
});
function operacionSuma() {
  let valor1 = +campo1.value;
  let valor2 = +campo2.value;
  let resultado = valor1 + valor2;
  mostrarResultado(resultado);
}

function operacionResta() {
  let valor1 = +campo1.value;
  let valor2 = +campo2.value;
  let resultado = valor1 - valor2;
  mostrarResultado(resultado);
}

function operacionMultiplicacion() {
  let valor1 = +campo1.value;
  let valor2 = +campo2.value;
  let resultado = valor1 * valor2;
  mostrarResultado(resultado);
}

function operacionDivision() {
  let valor1 = +campo1.value;
  let valor2 = +campo2.value;
  let resultado = valor1 / valor2;
  mostrarResultado(resultado);
}

function operacionRaizCuadrada() {
  let valor1 = +campo1.value;
  let resultado = Math.sqrt(valor1);
  mostrarResultado(resultado);
}

function operacionPotencia() {
  let valor1 = +campo1.value;
  let valor2 = +campo2.value;
  let resultado = Math.pow(valor1, valor2);
  mostrarResultado(resultado);
}

function operacionValor() {
  let valor1 = +campo1.value;
  mostrarResultado(valor1);
}

function operacionAbsoluto() {
  let valor1 = +campo1.value;
  let resultado = Math.abs(valor1);
  mostrarResultado(resultado);
}

function operacionRandom() {
  let resultado = Math.random();
  mostrarResultado(resultado);
}

function operacionRound() {
  let valor1 = +campo1.value;
  let resultado = Math.round(valor1);
  mostrarResultado(resultado);
}

function operacionFloor() {
  let valor1 = +campo1.value;
  let resultado = Math.floor(valor1);
  mostrarResultado(resultado);
}

function operacionCeil() {
  let valor1 = +campo1.value;
  let resultado = Math.ceil(valor1);
  mostrarResultado(resultado);
}

function mostrarResultado(resultado) {
  let campoResultado = document.getElementById("mostrarResultado");
  campoResultado.value = resultado;
}
