/* 
- Crie uma função chamada `inverterString` que receba uma string como argumento e retorne a string invertida.
*/

console.log("Exercício 35 OK");

const formularioExercicio35 = document.getElementById("exercicio35Form");
const textoExercicio35Input = document.getElementById("exercicio35texto");
const resultadoExercicio35 = document.getElementById("exercicio35resultado");

function inverterStringExercicio35(a) {
  return a.split("").reverse().join("");
}

formularioExercicio35.addEventListener("submit", (e) => {
  e.preventDefault();

  let texto = textoExercicio35Input.value;
  let textoInvertido = inverterStringExercicio35(texto);

  console.log("Entrou " + textoInvertido);
  resultadoExercicio35.innerHTML = `<p>${textoInvertido}</p>`;
  formularioExercicio35.reset();
})