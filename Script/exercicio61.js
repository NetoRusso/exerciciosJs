/* 
- Crie uma função chamada `intersecaoArrays` que receba dois arrays como argumentos e retorne um novo array contendo os elementos que são comuns aos dois arrays.
*/

console.log("Exercício 61 OK");

const lista1Exercicio61Display = document.getElementById("lista1Exercicio61");
const lista2Exercicio61Display = document.getElementById("lista2Exercicio61");
const btnExercicio61 = document.getElementById("exercicio61FormBtnComparar");
const resultadoExercicio61 = document.getElementById("exercicio61resultado");



const lista1Exercicio61 = ["Neto", "Milena", "Banana", "Melância", "Chocolate"];
const lista2Exercicio61 = ["Banana", "Abacate", "Morango", "Melância", "Abacaxi"];

lista1Exercicio61Display.textContent = `[ ${lista1Exercicio61.join(", ")} ]`;
lista2Exercicio61Display.textContent = `[ ${lista2Exercicio61.join(", ")} ]`;

function intersecaoArraysExercicio61(array1, array2) {
  let novaLista = []
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        novaLista.push(array1[i])
      }
    }
  }
  return novaLista;
}

btnExercicio61.addEventListener("click", (e) => {
  e.preventDefault();

  let novaLista = intersecaoArraysExercicio61(lista1Exercicio61, lista2Exercicio61);

  resultadoExercicio61.innerHTML = `<p>[ ${novaLista.join(", ")} ] </p>`;
})
