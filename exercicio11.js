/* 
- Escreva um programa que converte notas numéricas em conceitos (A, B, C, D, E, F) baseado em um sistema de pontuação.
*/

console.log("Exercício 11 OK");

const formularioExercicio11 = document.getElementById("exercicio11Form");
const notaExercicio11Input = document.getElementById("notaExercicio11");
const btnExercicio11 = document.getElementById("exercicio11FormBtn");
const resultadoExercicio11 = document.getElementById("exercicio11resultado");

btnExercicio11.addEventListener("click", (e) => {
  e.preventDefault();
  
  let notaExercicio11 = parseFloat(notaExercicio11Input.value);
  let taxaNota = (notaExercicio11 / 10);

  let resultadoCopilado = taxaNota < 0.1 ? `você Obteve ${(taxaNota * 100).toFixed(2)}% da nota ficando com a classe F.` : 
    taxaNota >= 0.1 && taxaNota < 0.2 ? `você Obteve ${(taxaNota * 100).toFixed(2)}% da nota ficando com a classe E.` : 
    taxaNota >= 0.2 && taxaNota < 0.4 ? `você Obteve ${(taxaNota * 100).toFixed(0)}% da nota ficando com a classe D.` : 
    taxaNota >= 0.4 && taxaNota < 0.6 ? `você Obteve ${(taxaNota * 100).toFixed(0)}% da nota ficando com a classe C.` : 
    taxaNota >= 0.6 && taxaNota < 0.9 ? `você Obteve ${(taxaNota * 100).toFixed(0)}% da nota ficando com a classe B.` : 
    taxaNota >= 0.9 && taxaNota <= 1 ? `você Obteve ${(taxaNota * 100).toFixed(0)}% da nota ficando com a classe A.` : 
    `Adicione um valor válido.`;

  resultadoExercicio11.textContent = resultadoCopilado;
  console.log(resultadoCopilado);
  formularioExercicio11.reset();

})