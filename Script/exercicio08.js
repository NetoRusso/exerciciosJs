/*
- Escreva um programa que determina se um número é par ou ímpar.
*/

console.log("Exercício 08 OK");

const formularioExercicio08 = document.getElementById("exercicio08Form");
const numeroExercicio08Input = document.getElementById("exercicio08Numero");
const btnResultado08 = document.getElementById("exercicio08FormBtn");
const resultadoExercicio08 = document.getElementById("exercicio08resultado");


btnResultado08.addEventListener("click", (e) => {
  e.preventDefault();

  let numeroExercicio08 = parseInt(numeroExercicio08Input.value);

  let moduloNumeroExercicio08 = numeroExercicio08 % 2;

  resultadoExercicio08Ok = moduloNumeroExercicio08 === 0 ? `O Número ${numeroExercicio08} é Par` : `O Número ${numeroExercicio08} é Impar`

  resultadoExercicio08.textContent = resultadoExercicio08Ok;
  console.log(resultadoExercicio08Ok);

  formularioExercicio08.reset();
});
