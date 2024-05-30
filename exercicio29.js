/* 
- Crie uma função chamada `subtracao` que receba dois números como argumentos e retorne a subtração do segundo número pelo primeiro.
*/

console.log("Exercício 29 OK");

const formularioExercicio29 = document.getElementById("exercicio29Form");
const numero1Exercicio29Input = document.getElementById("exercicio29numero1");
const numero2Exercicio29Input = document.getElementById("exercicio29numero2");
const resultadoExercicio29 = document.getElementById("exercicio29resultado");


function subtracaoExercicio29(a, b) {
  return a - b;
}

formularioExercicio29.addEventListener("submit", (e) => {
  e.preventDefault();

  let numero1 = parseFloat(numero1Exercicio29Input.value);
  let numero2 = parseFloat(numero2Exercicio29Input.value);

  if (isNaN(numero1) || isNaN(numero2)) {
    resultadoExercicio29.innerHTML = `<p>Por favor insira valores válidos</p>`;
  } else {
    console.log(`o resultado de ${numero1} - ${numero2} = ${subtracaoExercicio29(numero1, numero2)}`);
    resultadoExercicio29.innerHTML = `<p>o resultado de ${numero1} - ${numero2} = ${subtracaoExercicio29(numero1, numero2)}</p>`;
    formularioExercicio29.reset();
  }

})