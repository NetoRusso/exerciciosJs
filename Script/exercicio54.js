/* 
- Crie uma função chamada `contemSubstring` que receba duas strings como argumentos e retorne `true` se a primeira string contiver a segunda string, e `false` caso contrário.
*/

console.log("Exercício 54 OK");

const formularioExercicio54 = document.getElementById("exercicio54Form");
const texto1Exercicio54Input = document.getElementById("exercicio54texto1");
const texto2Exercicio54Input = document.getElementById("exercicio54texto2");
const resultadoExercicio54 = document.getElementById("exercicio54resultado");
const btnExercicio54Limpar = document.getElementById("exercicio54FormBtnResetar");

function contemSubstringExercicio54(a, b) {
  return a.includes(b);
}

formularioExercicio54.addEventListener("submit", (e) => {
  e.preventDefault();

  let texto = texto1Exercicio54Input.value;
  let termo = texto2Exercicio54Input.value;
  let textoAlto = (texto1Exercicio54Input.value).toUpperCase();
  let termoAlto = (texto2Exercicio54Input.value).toUpperCase();

  let resultado = contemSubstringExercicio54(textoAlto, termoAlto);

resultadoExercicio54.innerHTML = `<p> O trecho " ${termo} " ${resultado ? 'está ': 'não está '} presente na frase: <br/> " ${texto} "</p>`;


})

btnExercicio54Limpar.addEventListener("click", (e) => {
  e.preventDefault();
  texto1Exercicio54Input.value = "";
  texto2Exercicio54Input.value = "";
  resultadoExercicio54.innerHTML = ``;
  formularioExercicio54.reset();
})