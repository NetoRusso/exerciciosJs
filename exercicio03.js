/* 
Crie um trecho de código que lê a idade de uma pessoa e mostra o ano em que ela nasceu. O cálculo é ANO ATUAL - IDADE inserida;
*/
console.log("Exercicio 03 OK");

const idadeInput = document.getElementById("exercicio03idade");
const aniversarioInputSim = document.getElementById("aniversarioSim");
const btnAniversario = document.getElementById("exercicio03FormBtn");
const formularioExercicio03 = document.getElementById("exercicio03Form");
const resultadoExercicio03 = document.getElementById("exercicio03resultado");

const dataCompleta = new Date();
const anoAtual = dataCompleta.getFullYear();



btnAniversario.addEventListener("click", (e) => {
  e.preventDefault();

  let idade;

  try {
    idade = idadeInput.value;

    if (isNaN(idade) || idade <= 0) {
      throw new Error("Erro de digitação: Por favor insira uma idade válida");
    }
  } catch {
    resultadoExercicio03.textContent = erro.message;
    return;
  }

  const resultado = aniversarioInputSim.checked ? (anoAtual - idade) : (anoAtual - ++idade);

  resultadoExercicio03.textContent = resultado;
  formularioExercicio03.reset();
})
