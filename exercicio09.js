/*
- Implemente uma calculadora que recebe dois números e uma operação (adição, subtração,
        multiplicação, divisão) e retorna o resultado.
*/

console.log("Exercício 09 OK");

const formularioExercicio09 = document.getElementById("exercicio09Form");
const numero01Exercicio09Input = document.getElementById("exercicio09Numero01");
const numero02Exercicio09Input = document.getElementById("exercicio09Numero02");
const operador = document.getElementById("operadorCalcular");
const btnExercicio09 = document.getElementById("exercicio09FormBtn");
const resultadoExercicio09 = document.getElementById("exercicio09resultado");

btnExercicio09.addEventListener("click", (e) => {
  e.preventDefault();

  let operadorEscolido = operador.value;
  let numero01Exercicio09 = parseFloat(numero01Exercicio09Input.value);
  let numero02Exercicio09 = parseFloat(numero02Exercicio09Input.value);
  let resultado;



  switch (operadorEscolido) {
    case "somar":
      resultado = (numero01Exercicio09 + numero02Exercicio09);

      break;

    case "subtrair":
      resultado = (numero01Exercicio09 - numero02Exercicio09);

      break;

    case "mutiplicar":
      resultado = (numero01Exercicio09 * numero02Exercicio09);

      break;

    case "dividir":
      resultado = (numero01Exercicio09 / numero02Exercicio09);

      break;

    default:
      return resultado = ("Porfavor escolha um operador");
  }


  resultadoExercicio09.textContent = resultado;
  formularioExercicio09.reset();
})