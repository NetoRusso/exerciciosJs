/*
- Crie uma função chamada `fatorial` que receba um número como argumento e retorne o fatorial desse número.
*/

console.log("Exercício 32 OK");

const formularioExercico32 = document.getElementById("exercicio32Form");
const numeroExercicio32Input = document.getElementById("exercicio32numero");
const resultadoExercicio32 = document.getElementById("exercicio32resultado");


function fatorialExercicio32(a) {
  for (let i = a; i > 1; i--) {
    a = a * (i - 1);
  }
  return a;
}

formularioExercico32.addEventListener("submit", (e) => {
  e.preventDefault();

  let numero = parseInt(numeroExercicio32Input.value);

  if (numero === 0) {
    console.log(`O valor de ${numero}! é = 1`);
    resultadoExercicio32.innerHTML = `<p>O valor de ${numero}! é = 1.</p>`
    formularioExercico32.reset();
  } else {
    console.log(`O valor de ${numero}! é = ${fatorialExercicio32(numero)}`);
    resultadoExercicio32.innerHTML = `<p>O valor de ${numero}! é = ${fatorialExercicio32(numero)}.</p>`
    formularioExercico32.reset();
  }
})