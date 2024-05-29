/* 
Escreva um programa que pede ao usuário para inserir um número e imprime a tabuada desse número de 1 a 10 usando um loop.
*/

console.log("Exercício 18 OK");

const formularioExercicio18 = document.getElementById("exercicio18Form");
const numeroInteiroExercicio18Input = document.getElementById("numeroInteiroExercio18");
const btnExercicio18 = document.getElementById("exercicio18FormBtn");
const resultadoExercicio18 = document.getElementById("exercicio18resultado");

btnExercicio18.addEventListener("click", (e) => {
  e.preventDefault();

  let numero = parseInt(numeroInteiroExercicio18Input.value);
  let linhas = "";

  for (let i = 1; i <= 10; i++) {
    linhas = linhas +`<tr style="border: solid 2px #000" ><td style="border: solid 2px #000">${numero}</td><td style="border: solid 2px #000">X</td><td style="border: solid 2px #000">${i}</td><td style="border: solid 2px #000"> ${numero * i}</td></tr>`
  
  }
  resultadoExercicio18.innerHTML = `<table>${linhas}</table>`;
  formularioExercicio18.reset();
})
