/* 
Faça um programa que solicita ao usuário que insira as notas de alunos em uma disciplina e calcula a média dessas notas. O programa deve continuar pedindo notas até que o usuário decida parar.
*/

console.log("Exercício 22 OK");

const formularioExercicio22 = document.getElementById("exercicio22Form");
const notaExercicio22Input =document.getElementById("notaExercicio22");
const btnExercicio22 = document.getElementById("exercicio22FormBtn");
const btnExercicio22Limpar = document.getElementById("exercicio22FormBtnReset");
const resultadoExercicio22 = document.getElementById("exercicio22resultado");

let notasCopiladas = [];

btnExercicio22.addEventListener("click", (e) => {
  e.preventDefault();

  let numero = parseFloat(notaExercicio22Input.value);

  if (numero < 0 || isNaN(numero)) {
    console.log("A nota não pode ser negativa");
    notaExercicio22Input.value = "";
  } else {
    notasCopiladas.push(numero);
    notaExercicio22Input.value = "";
    let soma = 0;
    for (let i = 0; i < notasCopiladas.length; i++) {
      soma += notasCopiladas[i];
    }
    let media = soma / notasCopiladas.length;
    resultadoExercicio22.innerHTML = `<p>Notas:✨${notasCopiladas.join(", ")}🌟</p> <p>A média das notas é:👍${media.toFixed(2)}👍</p>`;
  }
})

btnExercicio22Limpar.addEventListener("click", (e) => {
  e.preventDefault();

notasCopiladas = [];
resultadoExercicio22.innerHTML = "";
formularioExercicio22.reset();

})

