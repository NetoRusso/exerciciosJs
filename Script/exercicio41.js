/* 
- Crie uma função chamada `fibonacci` que receba um número `n` como argumento e retorne o `n`-ésimo número da sequência de Fibonacci.
*/

console.log("Exercício 41 OK");

const formularioExercicio41 = document.getElementById("exercicio41Form");
const numeroExercicio41Input = document.getElementById("exercicio41numero");
const resultadoExercicio41 = document.getElementById("exercicio41resultado");

function fibonacciExercicio41(n) {
  let resultado = [];
  if (n === 1) {
    resultado = [0];
  } else if (n >= 2) {
    resultado = [0, 1];
  }

  for (let i = 2; i < n; i++) {
    resultado[i] = resultado[i - 1] + resultado[i - 2];
  }

  return resultado;
}

formularioExercicio41.addEventListener("submit", (e) => {
  e.preventDefault();

  let numero = parseInt(numeroExercicio41Input.value);
  let termos = fibonacciExercicio41(numero).join(", ");

  resultadoExercicio41.innerHTML = `<p>Os primeiros ${numero} termos da sequência Fibonacci são:<br/> ${termos}</p>`;

})