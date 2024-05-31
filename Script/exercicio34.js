/* 
-Crie uma função chamada `media` que receba um array de números como argumento e retorne a média dos números.
*/

console.log("Exercício 34 OK");

const formularioExercicio34 = document.getElementById("exercicio34Form");
const novaNotaExercicio34Input = document.getElementById("exercicio34nota");
const btnExercicio34Reset = document.getElementById("exercicio34FormBtnReset");
const resultadoExercicio34 = document.getElementById("exercicio34resultado");

function mediaExercicio34(a) {
  let acumulo = 0;
  for (let i = 0; i < a.length; i++) {
    acumulo += a[i];
  }
  return acumulo;
}

let notasExercicio34 = [];

formularioExercicio34.addEventListener("submit", (e) => {
  e.preventDefault();

  let nota = parseFloat(novaNotaExercicio34Input.value);
  if (isNaN(nota)) {
    resultadoExercicio34.innerHTML = `Por favor insira uma nota válida!`;
    formularioExercicio34.reset();
    return;
  }
  notasExercicio34.push(nota);

  let media = (mediaExercicio34(notasExercicio34)/notasExercicio34.length).toFixed(2);

  resultadoExercicio34.innerHTML = `As notas são: ${notasExercicio34} .<br/> A média atual está em ${media}.<br/> Até o momento foram adicionadas ${notasExercicio34.length} Notas`;

  formularioExercicio34.reset();
})

btnExercicio34Reset.addEventListener("click", (e) => {
  e.preventDefault();

  notasExercicio34 = [];
  resultadoExercicio34.innerHTML=`<p>O quadro de notas foi limpo!</p>`;
  formularioExercicio34.reset();
})
