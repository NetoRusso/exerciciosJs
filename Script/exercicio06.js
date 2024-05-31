/*
Escreva um programa que leia um valor de uma temperatura em CELSIUS e converte para FAHRENHEIT. O cálculo é: CELSIUS * 1,8 + 32.
*/

console.log("Exercicio 06 OK");

const formularioExercicio06 = document.getElementById("exercicio06Form");
const temperaturaCelciusInput = document.getElementById("exercicio06Celcius");
const btnExercicio06 = document.getElementById("exercicio06FormBtn");
const resultadoExercicio06 = document.getElementById("exercicio06resultado");

btnExercicio06.addEventListener("click", (e) => {
  e.preventDefault();

  let temperaturaCelsius = parseFloat(temperaturaCelciusInput.value);

  let temperaturaFahrenheit = ((temperaturaCelsius * 1.8) + 32);

  resultado06OK = `${temperaturaCelsius}º Celsius em Fahrenheit é ${temperaturaFahrenheit.toFixed(2)}`

  console.log(resultado06OK);

  resultadoExercicio06.textContent = resultado06OK;

  formularioExercicio06.reset();
})
