/* 
- Crie uma função chamada `contagemRegressiva` que receba um número como argumento e exiba uma contagem regressiva a partir desse número até 0, usando recursão.
*/

console.log("Exercício 40 OK");

const formularioExercicio40 = document.getElementById("exercicio40Form");
const tempoExercicio40Input = document.getElementById("exercicio40tempo");
const btnExercicio40Input = document.getElementById("exercicio40FormBtn");
const resultadoExercicio40 = document.getElementById("exercicio40resultado");


function contagemRegressivaExercicio40(tempo) {
  btnExercicio40Input.style.display = "none";
  if (tempo > 0) {
    resultadoExercicio40.innerHTML = `<p style="font-size: 24px; font-weight: 600; color: var(--cor-destaque)"> ${tempo}</p>`;
    setTimeout(() => {
      contagemRegressivaExercicio40(tempo - 1);
    }, 1000);
  } else {
    resultadoExercicio40.innerHTML = `<p style="font-size: 24px; font-weight: 600;"> Tempo esgotado!</p>`;
    btnExercicio40Input.style.display = "block";
  }
}

formularioExercicio40.addEventListener("submit", (e) => {
  e.preventDefault();

  let tempo = parseInt(tempoExercicio40Input.value);
  contagemRegressivaExercicio40(tempo);
  formularioExercicio40.reset();

});