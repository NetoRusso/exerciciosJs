
// Exercicio 01:
/*
Crie um trecho de código que calcula a média de 3 notas. Crie três variáveis para representar as três notas e outra para guardar o resultado do cálculo;
*/

console.log("Exercicio 01 OK");

const nota01Input = document.getElementById("nota01");
const nota02Input = document.getElementById("nota02");
const nota03Input = document.getElementById("nota03");

const btnExercicio01 = document.getElementById("exercicio01FormBtn");
const formularioExercicio01 = document.getElementById("exercicio01Form");
const resultadoExercicio01 = document.getElementById("exercicio01resultado");


btnExercicio01.addEventListener("click", function (e) {
  e.preventDefault();

  let nota01, nota02, nota03;
  try {
    nota01 = parseFloat(nota01Input.value);
    nota02 = parseFloat(nota02Input.value);
    nota03 = parseFloat(nota03Input.value);

    if (isNaN(nota01) || isNaN(nota02) || isNaN(nota03)) {
      throw new Error("Erro de digitação: Digite números válidos para as notas.");
    }
  } catch (erro) {
    resultadoExercicio01.textContent = erro.message;
    return;
  }

  const media = (nota01 + nota02 + nota03) / 3;

  resultadoExercicio01.textContent = media.toFixed(2);
  formularioExercicio01.reset();
});

