/* 
- Crie uma função chamada `mapearArray` que receba um array e uma função de mapeamento (callback) como argumentos e retorne um novo array com os resultados da função de mapeamento aplicada a cada elemento.
*/

console.log("Exercício 59 OK");

const formularioExercicio59 = document.getElementById("exercicio59Form");
const textoExercicio59Input = document.getElementById("exercicio59texto");
const btnExercicio59Resetar = document.getElementById("exercicio59FormBtnReset");
const listaExercicio59Display = document.getElementById("listaExercicio59");

let listaExercicio59 = [1, 2, 3, 4, 5, 6, 7];

listaExercicio59Display.textContent = `[ ${listaExercicio59.join(", ")} ]`;

function mapearArrayExercicio59(l, t) {
  let novaLista = l.map((i) => i + t);
  return novaLista;
}

formularioExercicio59.addEventListener("submit", (e) => {
  e.preventDefault();

  let texto = textoExercicio59Input.value;

  let lista = mapearArrayExercicio59(listaExercicio59, texto);

  listaExercicio59Display.textContent = `[ ${lista.join(", ")} ]`;

  formularioExercicio59.reset();
})

btnExercicio59Resetar.addEventListener("click", (e) => {
  e.preventDefault();

  listaExercicio59Display.textContent = `[ ${listaExercicio59.join(", ")} ]`;
  formularioExercicio59.reset();
})