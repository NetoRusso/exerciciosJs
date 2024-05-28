/*
Escreva um programa que leia um valor em metros e o exiba no console convertido em milímetros.
*/

console.log("Exercício 05 OK");

const formularioExercicio05 = document.getElementById("exercicio05Form");
const medidaMetroInput = document.getElementById("exercicio05Metros");
const btnExercicio05 = document.getElementById("exercicio05FormBtn");
const resultadoExercicio05 = document.getElementById("exercicio05resultado");

btnExercicio05.addEventListener("click", (e) => {
  e.preventDefault();

  let medidaMetro = parseFloat(medidaMetroInput.value);

  let medidaMilimetro;
  
  medidaMilimetro = (medidaMetro*1000);
  
  const resultado05Convertido = (`${medidaMetro}m é igual a ${medidaMilimetro}mm`)

  console.log(resultado05Convertido);

  resultadoExercicio05.textContent = resultado05Convertido;
  formularioExercicio05.reset();

})