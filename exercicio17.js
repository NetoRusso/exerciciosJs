/*
Crie um programa que solicita ao usuário um número inteiro positivo N e, em seguida, calcula a soma dos números de 1 a N utilizando um loop.
*/

console.log("Exercício 17 OK");

const formularioExercicio17 = document.getElementById("exercicio17Form");
const numeroInteiroExercicio17Input = document.getElementById("numeroInteiroExercio17");
const btnExercicio17 = document.getElementById("exercicio17FormBtn");
const resultadoExercicio17 = document.getElementById("exercicio17resultado");

btnExercicio17.addEventListener("click", (e) => {
  e.preventDefault();

  let numero = parseInt(numeroInteiroExercicio17Input.value);
  let resultado = 0;

  for (let i = 1; i <= numero; i++) {
    // console.log(i);
    resultado = resultado + i;
  }

  resultadoExercicio17.textContent = `A somas até o número ${numero} é igual ${resultado}.`;
  console.log(`A somas até o número ${numero} é igual ${resultado}.`);
  formularioExercicio17.reset();
})
