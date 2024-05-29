/* 
- Implemente um programa que verifica se um ano é bissexto ou não.
*/

console.log("Exercício 14 OK");

const formularioExercicio14 = document.getElementById("exercicio14Form");
const anoExercicio14Input = document.getElementById("exercicio14ano");
const btnExercicio14 = document.getElementById("exercicio14FormBtn");
const resultadoExercicio14 = document.getElementById("exercicio14resultado");

const dataCompletaExercicio14 = new Date();
const anoAtualExercicio14 = dataCompletaExercicio14.getFullYear();

function ehBissexto(ano) {
  return ((ano % 4 === 0) && (ano % 100 !== 0) || (ano % 400 === 0));
}

btnExercicio14.addEventListener("click", (e) => {
  e.preventDefault();

  let anoExercicio14 = parseInt(anoExercicio14Input.value);
  let resultadoCompilado;

  


  if (isNaN(anoExercicio14)) {
    resultadoCompilado = "Por favor digite um valor válido";
  }

  if (ehBissexto(anoExercicio14)) {
    resultadoCompilado = ` o ano ${anoExercicio14} ${ anoExercicio14 < anoAtualExercicio14 ? " foi " : anoExercicio14 > anoAtualExercicio14 ? " será ": " é " } Bissexto e ${anoExercicio14 < anoAtualExercicio14 ? " teve " : " terá "} 366 dias`;
  } else {
    resultadoCompilado = ` o ano ${anoExercicio14} não ${ anoExercicio14 < anoAtualExercicio14 ? " foi " : anoExercicio14 > anoAtualExercicio14 ? " será ": " é " } Bissexto e ${anoExercicio14 < anoAtualExercicio14 ? " teve " : " terá "} 365 dias`;
  }

  resultadoExercicio14.textContent = resultadoCompilado;
  console.log(resultadoCompilado);
  formularioExercicio14.reset();
})