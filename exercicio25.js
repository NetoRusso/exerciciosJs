/* 
        Crie um programa que solicita ao usuário para inserir um número e, em seguida, exibe a contagem de números pares e ímpares até esse número.
*/

console.log("Exercício 25 OK");

const formularioExercicio25 = document.getElementById("exercicio25Form");
const numeroExercicio25Input = document.getElementById("exercicio25numero");
const btnExercicio25 = document.getElementById("exercicio25FormBtn");
const resultadoExercicio25 = document.getElementById("exercicio25resultado");

btnExercicio25.addEventListener("click", (e) => {
  e.preventDefault();

  let numero = parseInt(numeroExercicio25Input.value);
  let par = [];
  let impar = [];

  for (i = 1; i <= numero; i++) {
    if (i % 2 === 0) {
      par.push(i);
    } else {
      impar.push(i);
    }
  }

  resultadoExercicio25.innerHTML = `
  <p style="margin: 8px 0;">Até o número ${numero} possuem ${par.length} números Pares e ${impar.length} números Impares:</p> 
  <p style="margin: 8px 0;"><strong style="font-weight: 700; color: var(--cor-destaque);">Números Impares</strong> : ${impar}</p> 
  <p style="margin: 8px 0;"><strong style="font-weight: 700; color: var(--cor-destaque);">Números Pares</strong> : ${par}</p>
  `;

  formularioExercicio25.reset();
})