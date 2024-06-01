/* 
- Crie uma função chamada `concatenarArrays` que receba dois arrays como argumentos e retorne um novo array que seja a concatenação dos dois arrays.
*/

console.log("Exercício 52 OK");

const formularioExercicio52 = document.getElementById("exercicio52Form");
const numeroExercicio52 = document.getElementById("exercicio52Numero");
const btnExercicio52Limpar = document.getElementById("exercicio52FormBtnReset");
const listaInicialExercicio52 = document.getElementById("exercicio52listaInicial");
const resultadoExercicio52 = document.getElementById("exercicio52listaResultados")

let listaExercicio52 = [];

const listaInicial52 = [ 1, 3, 6, 10, 15 ];

listaInicialExercicio52.textContent = `[ ${listaInicial52.join(", ")} ]`;

function concatenarArraysExercicio52(l) {
  let novaLista = [...listaInicial52];
  for (let i = 0; i < l.length; i++) {
    novaLista.push(l[i])
  }
  return novaLista;  
}


formularioExercicio52.addEventListener("submit", (e) => {
  e.preventDefault();

  let numero = parseInt(numeroExercicio52.value);
  listaExercicio52.push(numero);
  let listaConcatenada = concatenarArraysExercicio52(listaExercicio52);

  resultadoExercicio52.innerHTML = `<p style="line-height: 1.5;">Sua Lista: [ ${listaExercicio52.join(", ")} ]<br/>Lista concatenada: [ ${listaConcatenada.join(", ")} ].</p>`;


  formularioExercicio52.reset();
})



btnExercicio52Limpar.addEventListener("click", (e) => {
  e.preventDefault()

  listaExercicio52 = [];

  resultadoExercicio52.innerHTML = "";
  formularioExercicio52.reset();
})