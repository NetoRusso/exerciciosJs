/* 
- Crie uma função chamada `contarCaracteres` que receba uma string e um caractere como argumentos e retorne o número de vezes que o caractere aparece na string.
*/

console.log("Exercício 36 OK");

const formularioExercicio36 = document.getElementById("exercicio36Form");
const textoExercicio36 = document.getElementById("exercicio36texto");
const caractereExercicio36 = document.getElementById("exercicio36caractere");
const btnExercicio36Limpar = document.getElementById("exercicio36FormBtnReset");
const resultadoExercicio36 = document.getElementById("exercicio36resultado");

function contarCaracteresExercicio36(a, b) {
  let contador = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b){
      contador++;
    }
  }
  return contador;
}

formularioExercicio36.addEventListener("submit", (e) => {
  e.preventDefault();

  let texto = textoExercicio36.value;
  let textoValidado = texto.toUpperCase();
  let caractere = caractereExercicio36.value;
  let caractereValidado = caractere.toUpperCase();
  let contagem = contarCaracteresExercicio36(textoValidado, caractereValidado);

  console.log(`O caractere " ${caractere} " aparece ${contagem} vezes no texto: " ${texto}" `);
  resultadoExercicio36.innerHTML = `<p>O caractere " ${caractere} " aparece ${contagem} vezes no texto:<br/> " ${texto} "</p>`;
  caractereExercicio36.value = "";
})

btnExercicio36Limpar.addEventListener("click", (e) => {
  e.preventDefault();

  textoExercicio36.value = "";
  caractereExercicio36.value ="";
  resultadoExercicio36.innerHTML="";
  formularioExercicio36.reset();

})