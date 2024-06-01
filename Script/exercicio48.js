/* 
- Crie uma função chamada `ePalindromo` que receba uma string como argumento e retorne `true` se a string for um palíndromo e `false` caso contrário.
*/

console.log("Exercício 48 OK");

const formularioExercicio48 = document.getElementById("exercicio48Form");
const textoExercicio48Input = document.getElementById("exercicio48texto");
const resultadoExercicio48 = document.getElementById("exercicio48resultado");

function ePalindromoExercicio48(a) {
  let textoNormalizado = a.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let textoInvertido = textoNormalizado.split('').reverse().join('');
  // console.log(textoNormalizado+ "  "+ textoInvertido);
  return textoNormalizado === textoInvertido;
}


formularioExercicio48.addEventListener("submit", (e) => {
  e.preventDefault();

  let texto = textoExercicio48Input.value;
  let resultado = ePalindromoExercicio48(texto);
  console.log(resultado);

  if (resultado) {
    resultadoExercicio48.innerHTML = `<p> A frase ${texto} é um Palíndromo.</p>`;
    formularioExercicio48.reset();
  } else {
    resultadoExercicio48.innerHTML = `<p> A frase ${texto} Não é um Palíndromo.</p>`;
  }

  formularioExercicio48.reset();
})