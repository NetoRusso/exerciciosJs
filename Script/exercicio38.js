/* 
- Crie uma função chamada `operacao` que receba dois números e uma função como argumentos. A função deve aplicar a função fornecida aos dois números e retornar o resultado.
*/

console.log("Exercicio 38 OK");

const formularioExercicio38 = document.getElementById("exercicio38Form");
const numero1Exercicio38Input = document.getElementById("exercicio38numero1");
const numero2Exercicio38Input = document.getElementById("exercicio38numero2");
const operacaoExercicio38Input = document.getElementById("operacaoExercicio38");
const resultadoExercicio38 = document.getElementById("exercicio38resultado");

function operacaoExercicio38(a, b, operacao) {
  return operacao(a, b);
}

function somaExercicio38(a, b) {
  return a + b;
}

function subtracaoExercicio38(a, b) {
  return a - b;
}

function multiplicacaoExercicio38(a, b) {
  return a * b;
}

function divisaoExercicio38(a, b) {

  return b === 0 ? "Não é possivel divisão por 0!" : a / b;
}

formularioExercicio38.addEventListener("submit", (e) => {
  e.preventDefault();

  let numero1 = parseFloat(numero1Exercicio38Input.value);
  let numero2 = parseFloat(numero2Exercicio38Input.value);
  let operacaoEscolhida = operacaoExercicio38Input.value;
  let resultado;
  let sinal;

  if (isNaN(numero1) || isNaN(numero2)) {
    resultadoExercicio38.innerHTML = `<p>Por favor escolha valores válidos</p>`;
  } else if (operacaoEscolhida === "nada") {
    resultadoExercicio38.innerHTML = `<p>Por favor selecione uma operação.</p>`;
    return;
  }

  switch (operacaoEscolhida) {
    case "soma":
      resultado = operacaoExercicio38(numero1, numero2, somaExercicio38);
      sinal = "+";
      break;

    case "subtracao":
      resultado = operacaoExercicio38(numero1, numero2, subtracaoExercicio38);
      sinal = "-";
      break;

    case "multiplicacao":
      resultado = operacaoExercicio38(numero1, numero2, multiplicacaoExercicio38);
      sinal = "x";
      break;

    case "divisao":
      resultado = operacaoExercicio38(numero1, numero2, divisaoExercicio38);
      sinal = "÷";
      break;

    default:
      resultado = operacaoExercicio38(numero1, numero2, somaExercicio38);
  }

  resultadoExercicio38.innerHTML = `<p> A Operação resultou : ${numero1} ${sinal} ${numero2} = ${resultado.toFixed(2)} </p>`;

  formularioExercicio38.reset();
})