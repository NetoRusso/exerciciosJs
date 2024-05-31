/*
Crie um trecho de código que me diga quanto cobrar para vender um notebook usado: o seu custo foi R$3000, por quanto devo vendê-lo descontando 25%?
*/

console.log("Exercicio 04 OK")

const notebook = 3000;
const descontoInput = document.getElementById("exercicio04desconto");
const formularioExercicio04 = document.getElementById("exercicio04Form");
const btnExercicio04 = document.getElementById("exercicio04FormBtn");
const resultadoExercicio04 = document.getElementById("exercicio04resultado");


btnExercicio04.addEventListener("click", (e) => {
  e.preventDefault();

  let precoProduto = parseFloat(notebook);
  let desconto = parseFloat(descontoInput.value);

  const descontoReal = 1 - (desconto / 100);

  resultadoExercicio04.textContent = "R$ " + ((precoProduto * descontoReal).toFixed(2));
  formularioExercicio04.reset();
})