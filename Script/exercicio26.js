/* 
Desenvolva um programa que pede ao usuário para inserir as notas e os pesos de várias disciplinas e calcula a média ponderada.
*/

console.log("Exercício 26 OK");

const formularioExercicio26 = document.getElementById("exercicio26Form");
const notaExercicio26Input = document.getElementById("exercicio26nota");
const pesoExercicio26Input = document.getElementById("exercicio26Peso");
const btnExercicio26Calcular = document.getElementById("exercicio26FormBtn");
const btnExercicio26Resetar = document.getElementById("exercicio26FormBtn2");
const resultadoExercicio26 = document.getElementById("exercicio26resultado");

let listaNotasExercicio26 = [];
let listaPesosExercicio26 = [];

btnExercicio26Calcular.addEventListener("click", (e) => {
  e.preventDefault();

  let nota = parseFloat(notaExercicio26Input.value);
  let peso = parseFloat(pesoExercicio26Input.value);

  if (peso <= 0) {
    console.log("Barrado!!! Menor que 1");
    resultadoExercicio26.innerHTML = `<p> 🚫 O Peso da nota não pode ser menor que 1</p>`;
    formularioExercicio26.reset();
    return;
  }

  listaNotasExercicio26.push(nota);
  listaPesosExercicio26.push(peso);

  let somaNotasPonderadas =0;
  let somaPesos = 0;

  for (let i = 0; i < listaNotasExercicio26.length ; i++){
    somaNotasPonderadas += listaNotasExercicio26[i]*listaPesosExercicio26[i];
    somaPesos += listaPesosExercicio26[i];
  }

  let mediaPonderada = (somaNotasPonderadas / somaPesos).toFixed(2);

  console.log(`Notas: ${listaNotasExercicio26} || Pesos: ${listaPesosExercicio26} || Média Ponderada: ${mediaPonderada}`);

  resultadoExercicio26.innerHTML = `<p> ${mediaPonderada} </p>`;
  formularioExercicio26.reset();

})

btnExercicio26Resetar.addEventListener("click", (e) => {
  e.preventDefault()

  listaNotasExercicio26 = [];
  listaPesosExercicio26 = [];
  formularioExercicio26.reset();
})
