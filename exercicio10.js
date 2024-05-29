/* 
- Crie um programa que determina a categoria de uma pessoa baseada na idade (criança, adolescente, adulto, idoso).
*/

console.log("Exercício 10 OK");

const formularioExercicio10 = document.getElementById("exercicio10Form");
const idadeExercicio10Input = document.getElementById("idadeExercicio10");
const btnExercicio10 = document.getElementById("exercicio10FormBtn");
const resultadoExercicio10 = document.getElementById("exercicio10resultado");


btnExercicio10.addEventListener("click", (e) => {
  e.preventDefault();

  let idadeExercicio10 = parseFloat(idadeExercicio10Input.value);

  let resultadoCopilado = idadeExercicio10 > 0 && idadeExercicio10 <= 3 ? 
  `${idadeExercicio10} anos é um Bebê.` : idadeExercicio10 > 3 && idadeExercicio10 <= 12 ? 
  `${idadeExercicio10} anos é uma Criança.` : idadeExercicio10 > 12 && idadeExercicio10 <= 18 ?
  `${idadeExercicio10} anos é um Adolecente.` : idadeExercicio10 > 18 && idadeExercicio10 <= 60 ?
  `${idadeExercicio10} anos é um Adulto.` : idadeExercicio10 > 60 && idadeExercicio10 < 120 ?
  `${idadeExercicio10} anos é um Idoso.` : `Digite um valor válido!`;

  resultadoExercicio10.textContent = resultadoCopilado;
  console.log(resultadoCopilado);
  formularioExercicio10.reset();
})