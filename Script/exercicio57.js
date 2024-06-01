/* 
- Crie uma função chamada `removerDuplicatas` que receba um array como argumento e retorne um novo array sem duplicatas.
*/

console.log("Exercício 57 OK");

const apresentaListaExercicio57 = document.getElementById("listaInicialExercicio57");
const btnExercicio57Remover = document.getElementById("exercicio57FormBtn");
const btnExercicio57Resetar = document.getElementById("exercicio57FormBtnResetar");

const listaExercicio57 = [1, 2, 2, 37, 5, 36, 37, 22, 2, 1, 10, 5, 10, 9, 7];
apresentaListaExercicio57.textContent = `[ ${listaExercicio57.join(",  ")} ]`;


function removerDuplicatasExercicio57(l) {
  let listaUnica = [];

  for (let i = 0; i < l.length; i++) {
    if (!listaUnica.includes(l[i])){
      listaUnica.push(l[i])
    }
  }
  return listaUnica;
}

btnExercicio57Remover.addEventListener("click", (e) => {
  e.preventDefault();

  let novaLista = removerDuplicatasExercicio57(listaExercicio57);

  apresentaListaExercicio57.textContent = `[ ${novaLista.join(",  ")} ]`;
})

btnExercicio57Resetar.addEventListener("click", (e) => {
  e.preventDefault();


  apresentaListaExercicio57.textContent = `[ ${listaExercicio57.join(",  ")} ]`;
})