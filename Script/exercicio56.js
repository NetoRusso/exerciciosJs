/* 
- Crie uma função chamada `reduzirArray` que receba um array de números e uma função de redução (callback) como argumentos e retorne o valor reduzido.
*/

console.log("Exercício 56 OK");

const formularioExercicio56 = document.getElementById("exercicio56Form");
const operacaoExercicio56 = document.getElementById("operacaoExercicio56select");
const listaExercicio56 = document.getElementById("listaExercicio56");
const resultadoExercicio56 = document.getElementById("listaExercicio56Resultado");

const listaInicial56 = [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

listaExercicio56.textContent = `Lista: [ ${listaInicial56.join(", ")} ]`;


function reduzirArrayExercicio56(lista, o) {
  console.log(lista, o);
  let valorReduzido = lista[0];

  for (let i = 1; i < lista.length; i++) {
    valorReduzido = o(valorReduzido, lista[i]);
    console.log(valorReduzido);
  }
  return valorReduzido;
}

formularioExercicio56.addEventListener("submit", (e) => {
  e.preventDefault();

  let operacao = operacaoExercicio56.value;
  let operacaoEscolhida;

  switch (operacao) {
    case "soma":
      operacaoEscolhida = (a, b) => a + b;
      break;

    case "subtracao":
      operacaoEscolhida = (a, b) => a - b;
      break;

    case "multiplicacao":
      operacaoEscolhida = (a, b) => a * b;
      break;
    
    case "divisao":
      operacaoEscolhida = (a, b) => a / b;
      break
  }

  let valorReduzido = reduzirArrayExercicio56(listaInicial56, operacaoEscolhida);

  resultadoExercicio56.textContent = `A " ${operacao} "  dos elementos da lista é = ${valorReduzido}`;

  formularioExercicio56.reset();
})