/* 
- Crie uma função chamada `maiorNumero` que receba um array de números como argumento e retorne o maior número do array.
*/

console.log("Exercício 49 OK");

const formularioExercicio49 = document.getElementById("exercicio49Form");
const numeroExercicio49 = document.getElementById("exercicio49Numero");
const btnExercicio49Limpar = document.getElementById("exercicio49FormBtnReset");
const resultadoExercicio49 = document.getElementById("exercicio49resultado");

let listaExercicio49 = [];

function maiorNumeroExercicio49(l) {
  if (l.length === 0) {
    return null;
  }

  let m = l[0];

  for (let i = 1; i < l.length; i++) {
    if (l[i] > m){
      m = l[i];
    }
  }
  return m;
}


formularioExercicio49.addEventListener("submit", (e) => {
  e.preventDefault();

  let numero = parseInt(numeroExercicio49.value);
  listaExercicio49.push(numero);
  let maior = maiorNumeroExercicio49(listaExercicio49);

  resultadoExercicio49.innerHTML = `<p>[ ${listaExercicio49.join(", ")} ]<br/>Maior elemento :   " ${maior} ".</p>`;


  formularioExercicio49.reset();
})



btnExercicio49Limpar.addEventListener("click", (e) => {
  e.preventDefault()

  listaExercicio49 = [];

  resultadoExercicio49.innerHTML = "";
  formularioExercicio49.reset();
})