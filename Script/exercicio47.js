/* 
- Crie uma função chamada `contarVogais` que receba uma string como argumento e retorne o número de vogais na string.
*/

console.log("Exercício 47 OK");

const formularioExercicio47 = document.getElementById("exercicio47Form");
const textoExercicio47Input = document.getElementById("exercicio47texto");
const resultadoExercicio47 = document.getElementById("exercicio47resultado");

function contarVogaisExercicio47(a) {
  let contador = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] === "A" || a[i] === "E" || a[i] === "I" || a[i] === "O" || a[i] === "U") {
      contador++;
    }
  }
  return contador;
}


formularioExercicio47.addEventListener("submit", (e) => {
  e.preventDefault();

  let texto = textoExercicio47Input.value;
  let textoCopilado = texto.toUpperCase();
  let resultado = contarVogaisExercicio47(textoCopilado);


  resultadoExercicio47.innerHTML = `<p>Existem ${resultado} vogais no texto: <br/>" ${texto} "</p>`;
  formularioExercicio47.reset();
})