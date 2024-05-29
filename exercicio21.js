/* 
Crie um programa que gera os primeiros N termos da série Fibonacci, onde N é fornecido pelo usuário.
*/

console.log("Exercício 21 OK");

const formuçarioExercicio21 = document.getElementById("exercicio21Form");
const numeroExercicio21Input = document.getElementById("numeroInteiroExercio21");
const btnExercicio21 = document.getElementById("exercicio21FormBtn");
const resultadoExercicio21 = document.getElementById("exercicio21resultado");


btnExercicio21.addEventListener("click", (e) => {
  e.preventDefault();

  let numero = parseInt(numeroExercicio21Input.value);
  let resultado = [];

  if (numero === 1) {
    resultado = [0];
  }else if (numero === 2) {
    resultado = [0, 1];
  } else {
    resultado = [0, 1];
  }

  for (let i = 2; i < numero; i++) {
    resultado[i] = resultado[i - 1] + resultado[i -2];
  }

  resultadoExercicio21.textContent = `Os primeiros ${numero} Termos da sequência fibonacci são ${resultado}.`;
  console.log(`Os primeiros ${numero} Termos da sequência fibonacci são ${resultado}.`);
  formuçarioExercicio21.reset();

})