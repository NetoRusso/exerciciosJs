/* 
Desenvolva um programa que recebe um número inteiro positivo e verifica se é um número primo.
*/

console.log("Exercício 20 OK");

const formularioExercicio20 = document.getElementById("exercicio20Form");
const numeroExercicio20Input = document.getElementById("numeroInteiroExercio20");
const btnExercicio20 = document.getElementById("exercicio20FormBtn");
const resultadoExercicio20 = document.getElementById("exercicio20resultado");

btnExercicio20.addEventListener("click", (e) => {
  e.preventDefault();

  console.log("Entrou");
  let numero = parseInt(numeroExercicio20Input.value);
  let verificador = 0;

  for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
      verificador++;
    }
  }

  if (verificador <= 2) {
    resultadoExercicio20.textContent = `O número ${numero} é primo`;
    console.log(`O número ${numero} é primo`);

  } else {
    resultadoExercicio20.textContent = `O número ${numero} não é primo`;
    console.log(`O número ${numero} não é primo`);
  }

  formularioExercicio20.reset();




})