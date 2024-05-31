/* 
- Crie uma função chamada `criarSaudacao` que receba uma saudação como argumento e retorne uma nova função. A função retornada deve receber um nome como argumento e exibir a saudação seguida pelo nome.
*/

console.log("Exercicio 39 OK");

const formularioExercicio39 = document.getElementById("exercicio39Form");
const nomeExercicio39 = document.getElementById("exercicio39nome");
const resultadoExercicio39 = document.getElementById("exercicio39resultado");

let saudacoes39 = [
  `Olá, `,
  `Oiê, `,
  `Opa, `,
  `Iai, `,
  `Aoba, `,
  `Vamos que vamos `,
  `Fala parça `,
  `Viva! `,
  `Salve! `
]

function rodarSaudacao39() {
  return parseInt(Math.random() * (0 - 8 - 1) + (7 + 1));
}

function criarSaudacaoExercicio39(saudacao) {
  return function(nome) {
    resultadoExercicio39.innerHTML = `<p>${saudacao} ${nome}.</p>`;
  }
  
}

formularioExercicio39.addEventListener("submit", (e) => {
  e.preventDefault();

  let nome = nomeExercicio39.value;
  let indiceSaudacao = rodarSaudacao39();
  let saudacao = saudacoes39[indiceSaudacao];
  let saudar = criarSaudacaoExercicio39(saudacao);
  saudar(nome);
  
  formularioExercicio39.reset();
})
