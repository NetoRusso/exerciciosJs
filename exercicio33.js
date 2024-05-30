/* 
- Crie uma função chamada `ePrimo` que receba um número como argumento e retorne `true` se o número for primo e `false` caso contrário.
*/

console.log("Exercício 33 OK");

const formularioExercicio33 = document.getElementById("exercicio33Form");
const numeroExercicio33Input = document.getElementById("exercicio33numero");
const resultadoExercicio33 = document.getElementById("exercicio33resultado");

function ePrimoExercicio33(a) {
  let verificador = 0;

  for (let i = 1; i <= a; i++) {
    if (a % i == 0) {
      verificador++
    }
  }

  if (verificador <= 2){
    return true;
  } else {
    return false;
  }
}

formularioExercicio33.addEventListener("submit", (e) => {
  e.preventDefault();

  let numero = parseInt(numeroExercicio33Input.value);

  if(ePrimoExercicio33(numero)){
    resultadoExercicio33.innerHTML = `<p>O numero ${numero} é primo então ${ePrimoExercicio33(numero)}.</p>`;
    console.log(`O numero ${numero} é primo então ${ePrimoExercicio33(numero)}.`);
  } else {
    resultadoExercicio33.innerHTML = `<p>O numero ${numero} não é primo então ${ePrimoExercicio33(numero)}.</p>`;
    console.log(`O numero ${numero} não é primo então ${ePrimoExercicio33(numero)}.`)
  }
  

  formularioExercicio33.reset();

})