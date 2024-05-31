/* 
Implemente um jogo onde o computador escolhe um número aleatório entre 1 e 100, e o jogador tem que adivinhar. O programa deve fornecer dicas sobre se o número é maior ou menor.
*/

console.log("Exercicio 23 OK");

const formularioExercicio23 = document.getElementById("exercicio23Form");
const mensagemChute23 = document.getElementById("mensagemExercicio23");
const chuteExercicio23 = document.getElementById("exercicio23chute");
const resultadoExercicio23 = document.getElementById("exercicio23resultado");
const btnExercicio23 = document.getElementById("exercicio23FormBtn");

const mensagens23 = [
  "Tente de novo",
  "Errouuu, tente de novo",
  "Ainda não! Tente de novo",
  "Que pena, tente de novo",
  "Errou, errou feio, errou rude, tente de novo"
];

let numeroSecreto23 = undefined;

function gerarNumeroSecreto23() {
  return parseInt(Math.random() * (1 - 100 - 1) + (100 + 1));
};

function rodarMensagem23() {
  return parseInt(Math.random() * (0 - 4 - 1) + (4 + 1));
}

btnExercicio23.addEventListener("click", (e) => {
  e.preventDefault();

  if (numeroSecreto23 === undefined) {
    numeroSecreto23 = gerarNumeroSecreto23();
    resultadoExercicio23.textContent = "";
  }
  // console.log(numeroSecreto);

  let chute23 = parseInt(chuteExercicio23.value);

  // console.log(chute);

  if (chute23 === numeroSecreto23) {
    mensagemChute23.textContent = " Qual o seu Chute ?";
    resultadoExercicio23.textContent = "Parabénssss você adivinhouuu, Clique em verificar para jogar novamente";
    numeroSecreto23 = undefined;
  } else if (chute23 < numeroSecreto23) {
    mensagemChute23.textContent = ` ${mensagens23[rodarMensagem23()]}, o número é Maior ⬆️`;

  } else if (chute23 > numeroSecreto23) {
    mensagemChute23.textContent = ` ${mensagens23[rodarMensagem23()]}, o número é Menor ⬇️`;
  }

  formularioExercicio23.reset();
})