/* 
- Crie uma função chamada `filtrarPares` que receba um array de números como argumento e retorne um novo array contendo apenas os números pares.
*/

console.log("Exercício 51 OK");

const formularioExercicio51 = document.getElementById("exercicio51Form");
const numeroExercicio51 = document.getElementById("exercicio51Numero");
const btnExercicio51Limpar = document.getElementById("exercicio51FormBtnReset");
const resultadoExercicio51 = document.getElementById("exercicio51resultado");

let listaExercicio51 = [];

function filtrarParesExercicio51(l) {
  let ehPar = [];
  for (let i = 0; i < l.length; i++) {
    if (l[i] % 2 === 0) {
      ehPar.push(l[i])
    }
  }
  return ehPar;
}


formularioExercicio51.addEventListener("submit", (e) => {
  e.preventDefault();

  let numero = parseInt(numeroExercicio51.value);
  listaExercicio51.push(numero);
  let listaPares = filtrarParesExercicio51(listaExercicio51);

  resultadoExercicio51.innerHTML = `<p>[ ${listaExercicio51.join(", ")} ]<br/> Lista dos pares: [ ${listaPares.join(", ")} ].</p>`;


  formularioExercicio51.reset();
})



btnExercicio51Limpar.addEventListener("click", (e) => {
  e.preventDefault()

  listaExercicio51 = [];

  resultadoExercicio51.innerHTML = "";
  formularioExercicio51.reset();
})