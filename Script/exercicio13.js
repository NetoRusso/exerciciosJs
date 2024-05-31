/*
- Crie um programa que verifica se três segmentos formam um triângulo e, se sim, determina seu tipo (equilátero, isósceles, escaleno).
 */

console.log("Exercício 13 OK");

const formularioExercicio13 = document.getElementById("exercicio13Form");
const lado01Input = document.getElementById("exercicio13linha01");
const lado02Input = document.getElementById("exercicio13linha02");
const lado03Input = document.getElementById("exercicio13linha03");
const btnExercicio13 = document.getElementById("exercicio13FormBtn");
const resultadoExercicio13 = document.getElementById("exercicio13resultado");


function ehTriangulo(a, b, c) {
  return (a + b > c) && (a + c > b) && (b + c > a);
}

function ehEquilatero(a, b, c) {
  return a === b && b === c;
}

function ehIsosceles(a, b, c) {
  return (a === b && a !== c) || (a === c && a !== b) || (b === c && b !== a);
}

function calcularArea(a, b, c) {
  const s = (a + b + c) / 2;
  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

btnExercicio13.addEventListener("click", (e) => {
  e.preventDefault();

  let lado01 = parseFloat(lado01Input.value);
  let lado02 = parseFloat(lado02Input.value);
  let lado03 = parseFloat(lado03Input.value);
  let resultadoCopilado;

  if (lado01 <= 0 || lado02 <= 0 || lado03 <= 0) {
    resultadoCopilado = `As Linhas do triângulo devem ser positvos e maior que Zero`
  }

  if (!ehTriangulo(lado01, lado02, lado03)) {
    resultadoCopilado = `As Linhas não formam um triângulo`
  }

  if (ehEquilatero(lado01, lado02, lado03)) {
    resultadoCopilado = `Com as linhas de ${lado01}cm, formam um Triângulo Equilátero com a área de ${(calcularArea(lado01, lado02, lado03)).toFixed(2)}cm²`
  } else if (ehIsosceles(lado01, lado02, lado03)) {
    resultadoCopilado = `Com as linhas de ${lado01}cm, ${lado02}cm e ${lado03}cm formam um Triângulo Isósceles com a área de ${(calcularArea(lado01, lado02, lado03)).toFixed(2)}cm²`
  } else {
    resultadoCopilado = `Com as linhas de ${lado01}cm, ${lado02}cm e ${lado03}cm formam um Triângulo Escaleno com a área de ${(calcularArea(lado01, lado02, lado03)).toFixed(2)}cm²`
  }

  console.log(resultadoCopilado);
  resultadoExercicio13.textContent = resultadoCopilado;
  formularioExercicio13.reset();

});