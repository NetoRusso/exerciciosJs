/* 
- Crie uma função chamada `quadrado` que receba um número como argumento e retorne o quadrado desse número.
*/

console.log("Exercício 45 OK");

const formularioExercicio45 = document.getElementById("exercicio45Form");
const numeroExercicio45Input = document.getElementById("exercicio45numero");
const resultadoExercicio45 = document.getElementById("exercicio45resultado");

function quadradoExercicio45(n) {
  return n * n;
}

formularioExercicio45.addEventListener("submit", (e) => {
  e.preventDefault();

  let numero = parseFloat(numeroExercicio45Input.value);

  if (isNaN(numero)) {
    resultadoExercicio45.innerHTML= `<p>Por favor insira um valor válido</p>`;
    return;
  }

  let resultado = quadradoExercicio45(numero);

  resultadoExercicio45.innerHTML = `<p>O valor de ${numero}² é = ${resultado}</p>`;
  formularioExercicio45.reset();
})