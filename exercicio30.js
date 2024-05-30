/* 
- Crie uma função chamada `multiplicacao` que receba dois números como argumentos e retorne a multiplicação deles.
*/

console.log("Exercício 30 OK");

const formularioExercicio30 = document.getElementById("exercicio30Form");
const numero1Exercicio30Input = document.getElementById("exercicio30numero1");
const numero2Exercicio30Input = document.getElementById("exercicio30numero2");
const resultadoExercicio30 = document.getElementById("exercicio30resultado");


function multiplicacaoExercicio30(a, b) {
  return a * b;
}

formularioExercicio30.addEventListener("submit", (e) => {
  e.preventDefault();

  let numero1 = parseFloat(numero1Exercicio30Input.value);
  let numero2 = parseFloat(numero2Exercicio30Input.value);

  if (isNaN(numero1) || isNaN(numero2)) {
    resultadoExercicio30.innerHTML = `<p>Por favor insira valores válidos</p>`;
  } else {
    console.log(`o resultado de ${numero1} * ${numero2} = ${multiplicacaoExercicio30(numero1, numero2)}`);
    resultadoExercicio30.innerHTML = `<p>o resultado de ${numero1} X ${numero2} = ${multiplicacaoExercicio30(numero1, numero2)}</p>`;
    formularioExercicio30.reset();
  }

})