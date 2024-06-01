/* 
- Crie uma função chamada `ordenarArray` que receba um array de números como argumento e retorne o array ordenado em ordem crescente.
*/

console.log("Exercício 50 OK");

const formularioExercicio50 = document.getElementById("exercicio50Form");
const numeroExercicio50 = document.getElementById("exercicio50Numero");
const btnExercicio50Limpar = document.getElementById("exercicio50FormBtnReset");
const resultadoExercicio50 = document.getElementById("exercicio50resultado");

let listaExercicio50 = [];

function ordenarArrayExercicio50(l) {
  let ordenada = [...l];

  for (let i = 0; i < ordenada.length -1; i++){

    for (let j = 0; j < ordenada.length - i -1; j++){

      if (ordenada[j] > ordenada[j+1]){
        let temp = ordenada[j];
        ordenada[j] = ordenada[j + 1];
        ordenada[j + 1] = temp;
      }

    }
    
  }
  return ordenada;
}


formularioExercicio50.addEventListener("submit", (e) => {
  e.preventDefault();

  let numero = parseInt(numeroExercicio50.value);
  listaExercicio50.push(numero);
  let listaOrdenada = ordenarArrayExercicio50(listaExercicio50);

  resultadoExercicio50.innerHTML = `<p>[ ${listaExercicio50.join(", ")} ]<br/> Lista Ordenada: [ ${listaOrdenada.join(", ")} ].</p>`;


  formularioExercicio50.reset();
})



btnExercicio50Limpar.addEventListener("click", (e) => {
  e.preventDefault()

  listaExercicio50 = [];

  resultadoExercicio50.innerHTML = "";
  formularioExercicio50.reset();
})