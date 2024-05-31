/* 
- Crie uma função chamada `fahrenheitParaCelsius` que receba uma temperatura em Fahrenheit e retorne a temperatura convertida para Celsius.
*/

console.log("Exercício 43 OK");

const formularioExercicio43 = document.getElementById("exercicio43Form");
const temperaturaExercicio43 = document.getElementById("exercicio43numero");
const resultadoExercicio43 = document.getElementById("exercicio43resultado");

function fahrenheitParaCelsiusExercicio43(f) {
  return (f - 32)/1.8;
}

formularioExercicio43.addEventListener("submit", (e) => {
  e.preventDefault();

  let temperatura = parseFloat(temperaturaExercicio43.value);

  if(isNaN(temperatura)) {
    resultadoExercicio43.innerHTML = `<p>Por favor insira uma temperatura válida</p>`;
  }

  let temperaturaConvertida = fahrenheitParaCelsiusExercicio43(temperatura);

  resultadoExercicio43.innerHTML = `<p>${temperatura} Fahrenheits equivale a ${temperaturaConvertida.toFixed(2)}º Celsius.</p>`;

  formularioExercicio43.reset();
})