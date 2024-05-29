/* 
- Crie um jogo onde o programa escolhe um número aleatório e o jogador tem que adivinhar qual é. O programa deve fornecer dicas se o número fornecido é maior ou menor.
*/

console.log("Exercício 15 OK");

const formularioExercicio15 = document.getElementById("exercicio15Form");
const chuteExercicio15 = document.getElementById("exercicio15chute");
const mensagemChute = document.getElementById("mensagemExercicio15");
const resultadoExercicio15 = document.getElementById("exercicio15resultado");
const btnExercicio15 = document.getElementById("exercicio15FormBtn");

const mensagens = [
  "Tente de novo",
  "Errouuu, tente de novo",
  "Ainda não! Tente de novo",
  "Que pena, tente de novo",
  "Errou, errou feio, errou rude, tente de novo"
];

let numeroSecreto = undefined;

function gerarNumeroSecreto () {
  return parseInt(Math.random() * (1 - 1000 - 1) + (1000 + 1));
};

function rodarMensagem () {
  return parseInt(Math.random() * (0 - 4 - 1) + (4 + 1));
}

btnExercicio15.addEventListener("click", (e) => {
  e.preventDefault();

  if (numeroSecreto === undefined) {
    numeroSecreto = gerarNumeroSecreto();
    resultadoExercicio15.textContent = "";
  }
  // console.log(numeroSecreto);

  let chute = parseInt(chuteExercicio15.value);

  // console.log(chute);

  if (chute === numeroSecreto) {
    mensagemChute.textContent =" Qual o seu Chute ?";
    resultadoExercicio15.textContent = "Parabénssss você adivinhouuu, Clique em verificar para jogar novamente";
    numeroSecreto = undefined;
  } else if (chute < numeroSecreto) {
    mensagemChute.textContent = ` ${mensagens[rodarMensagem()]}, o número é Maior ⬆️`;

  } else if (chute > numeroSecreto) {
    mensagemChute.textContent = ` ${mensagens[rodarMensagem()]}, o número é Menor ⬇️`;
  }

  formularioExercicio15.reset();
})