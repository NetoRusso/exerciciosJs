/* 
- Crie uma função chamada `celsiusParaFahrenheit` que receba uma temperatura em Celsius e retorne a temperatura convertida para Fahrenheit.
*/

console.log("Exercício 42 OK");

const formularioExercicio42 = document.getElementById("exercicio42Form");
const temperaturaExercicio42 = document.getElementById("exercicio42numero");
const resultadoExercicio42 = document.getElementById("exercicio42resultado");

function celsiusParaFahrenheitExercicio42(c) {
  return (c * 1.8) + 32
}

formularioExercicio42.addEventListener("submit", (e) => {
  e.preventDefault();

  let temperatura = parseFloat(temperaturaExercicio42.value);
  if (isNaN(temperatura)) {
    resultadoExercicio42.innerHTML = `<p>Insira uma temperatura válida</p>`;
    return;
  }

  temperaturaConvertida = celsiusParaFahrenheitExercicio42(temperatura);

  resultadoExercicio42.innerHTML = `<p>${temperatura}º Celsius equivale a ${temperaturaConvertida.toFixed(2)} Fahrenheits</p>`;



    formularioExercicio42.reset();
})