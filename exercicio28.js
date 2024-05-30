/* 
- Crie uma função chamada `soma` que receba dois números como argumentos e retorne a soma deles.
*/

console.log("Exercício 28 OK");

const formularioExercicio28 = document.getElementById("exercicio28Form");
const numero1Exercicio28Input = document.getElementById("exercicio28numero1");
const numero2Exercicio28Input = document.getElementById("exercicio28numero2");
const resultadoExercicio28 = document.getElementById("exercicio28resultado");


function somarExercicio28 (a, b) {
  return a + b;
}

formularioExercicio28.addEventListener("submit", (e) => {
  e.preventDefault();

  let numero1 = parseFloat(numero1Exercicio28Input.value);
  let numero2 = parseFloat(numero2Exercicio28Input.value);

  if (isNaN(numero1) || isNaN(numero2)) {
    resultadoExercicio28.innerHTML = `<p>Por favor insira valores válidos</p>`;
  } else {
    console.log(`o resultado de ${numero1} + ${numero2} = ${somarExercicio28(numero1, numero2)}`);
    resultadoExercicio28.innerHTML = `<p>o resultado de ${numero1} + ${numero2} = ${somarExercicio28(numero1, numero2)}</p>`;
    formularioExercicio28.reset();
  }

})