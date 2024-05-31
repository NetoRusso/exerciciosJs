/* 
- Desenvolva um programa que calcula o valor final após aplicar um desconto a um determinado preço.
*/

console.log("Exercício 12 OK")

const precoProduto12Input = document.getElementById('exercicio12produto');
const desconto12Input = document.getElementById("exercicio12desconto");
const formularioExercicio12 = document.getElementById("exercicio12Form");
const btnExercicio12 = document.getElementById("exercicio12FormBtn");
const resultadoExercicio12 = document.getElementById("exercicio12resultado");


btnExercicio12.addEventListener("click", (e) => {
  e.preventDefault();

  let precoProduto;
  let desconto;

  try {
    precoProduto = parseFloat(precoProduto12Input.value);
    desconto = parseFloat(desconto12Input.value);

    if (isNaN(precoProduto) || isNaN(desconto)) {
      throw new Error("Erro na digitação: Digite valores validos");
    }
  } catch {
    resultadoExercicio12.textContent = erro.message;
    return;
  }

  const descontoReal = 1 - (desconto / 100);

  resultadoExercicio12.textContent = "R$ " + ((precoProduto * descontoReal).toFixed(2));
  formularioExercicio12.reset();
})