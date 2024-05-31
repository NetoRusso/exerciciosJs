/* 
- Crie uma função chamada `divisao` que receba dois números como argumentos e retorne a divisão do primeiro pelo segundo.
*/

console.log("Exercício 31 OK");

const formularioExercicio31 = document.getElementById("exercicio31Form");
const numero1Exercicio31Input = document.getElementById("exercicio31numero1");
const numero2Exercicio31Input = document.getElementById("exercicio31numero2");
const resultadoExercicio31 = document.getElementById("exercicio31resultado");


function divisaoExercicio31(a, b) {
  return a / b;
}

formularioExercicio31.addEventListener("submit", (e) => {
  e.preventDefault();

  let numero1 = parseFloat(numero1Exercicio31Input.value);
  let numero2 = parseFloat(numero2Exercicio31Input.value);

  if (isNaN(numero1) || isNaN(numero2)) {
    resultadoExercicio31.innerHTML = `<p>Por favor insira valores válidos</p>`;
  } else if (numero2 === 0) {
    resultadoExercicio31.innerHTML = `<p>Não pode realizar divisão por 0</p>`;
  } else {
    console.log(`o resultado de ${numero1} ÷ ${numero2} = ${divisaoExercicio31(numero1, numero2)}`);
    resultadoExercicio31.innerHTML = `<p>o resultado de ${numero1} ÷ ${numero2} = ${divisaoExercicio31(numero1, numero2)}</p>`;
    formularioExercicio31.reset();
  }

})