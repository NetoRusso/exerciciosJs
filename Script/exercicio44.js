/* 
- Crie uma função chamada `ePar` que receba um número como argumento e retorne `true` se o número for par e `false` caso contrário.
*/

console.log("Exercício 44 OK");

const formularioExercicio44 = document.getElementById("exercicio44Form");
const numeroExercicio44Input = document.getElementById("exercicio44numero");
const resultadoExercicio44 = document.getElementById("exercicio44resultado");

function eParExercicio44(n) {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

formularioExercicio44.addEventListener("submit", (e) => {
  e.preventDefault();

  let numero = parseInt(numeroExercicio44Input.value);
  let resultado = eParExercicio44(numero);

  if (resultado) {
    resultadoExercicio44.innerHTML = `<p>O número ${numero} é par portanto ${resultado}.</p>`;
    formularioExercicio44.reset();
  } else {
    resultadoExercicio44.innerHTML = `<p>O número ${numero} não é par portanto ${resultado}.</p>`;
    formularioExercicio44.reset();
  }
  
})