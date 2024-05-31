/* 
- Crie uma função chamada `raizQuadrada` que receba um número como argumento e retorne a raiz quadrada desse número.
*/

console.log("Exercício 46 OK");

const formularioExercicio46 = document.getElementById("exercicio46Form");
const numeroExercicio46Input = document.getElementById("exercicio46numero");
const resultadoExercicio46 = document.getElementById("exercicio46resultado");

function raizQuadradaExercicio46(n) {
  return Math.sqrt(n);
}

formularioExercicio46.addEventListener("submit", (e) => {
  e.preventDefault();

  let numero = parseFloat(numeroExercicio46Input.value);
  if (isNaN(numero)) {
    resultadoExercicio46.innerHTML = `<p>Por favor insira um valor válido!</p>`;
    return;
  }

  let resultado = raizQuadradaExercicio46(numero);

  resultadoExercicio46.innerHTML = `<p>O resultado de √${numero} é = ${resultado.toFixed(3)}.</p>`;

  formularioExercicio46.reset();
})