/* 
Implemente um programa que solicita um número inteiro não negativo e calcula o fatorial desse número usando um loop.
*/

console.log("Exercício 19 OK");

const formularioExercicio19 = document.getElementById("exercicio19Form");
const numeroExercicio19Input = document.getElementById("numeroInteiroExercio19");
const btnExercicio19 = document.getElementById("exercicio19FormBtn");
const resultadoExercicio19 = document.getElementById("exercicio19resultado");


btnExercicio19.addEventListener("click", (e) => {
  e.preventDefault();

  let numero = parseInt(numeroExercicio19Input.value);
  let resultado = numero;

  for (let i = numero; i > 1; i--) {
    resultado = resultado * (i -1);
  }
  
  console.log(`O valor de ${numero}! é igual a ${resultado}.`);
  resultadoExercicio19.textContent = `O valor de ${numero}! é igual a ${resultado}.`;
  formularioExercicio19.reset();

})

