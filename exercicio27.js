/* 
- Crie uma função chamada `saudacao` que receba um nome como argumento e exiba uma mensagem de saudação no console.
*/

console.log("Exercicio 27 OK");

const formularioExercicio27 = document.getElementById("exercicio27Form");
const nomeExercicio27Input = document.getElementById("exercicio27nome");
const resultadoExercicio27 = document.getElementById("exercicio27resultado");



function rodarSaudacao27() {
  return parseInt(Math.random() * (0 - 7 - 1) + (7 + 1));
}

formularioExercicio27.addEventListener("submit", (e) => {
  e.preventDefault();

  let nome = nomeExercicio27Input.value;

  let saudacoes27 = [
    `Olá, ${nome} !`,
    `Oiê, ${nome} !`,
    `Opa, ${nome} !`,
    `Iai, ${nome} !`,
    `Aoba, ${nome} !`,
    `Tudo bem ${nome} ?`,
    `Como você está ${nome} ?`,
    `A família está bem ${nome} ?`
  ]
  console.log(saudacoes27[rodarSaudacao27()]);
  resultadoExercicio27.innerHTML = `<p>${saudacoes27[rodarSaudacao27()]}</p>`;
  formularioExercicio27.reset();
})