/* 
- Crie uma função chamada `memoFatorial` que usa memoização para otimizar o cálculo do fatorial.
*/

console.log("Exercício 53 OK");

const formularioExercicio53 = document.getElementById("exercicio53Form");
const numeroExercicio53Input = document.getElementById("exercicio53Numero");
const resultadoExercicio53 = document.getElementById("exercicio53resultado");

let cacheFatorial53 = {};

function memoFatorialExercicio53(n) {
  if (n === 0) {
    return 1
  }

  if (n in cacheFatorial53) {
    console.log(`O ${n}! já consta em memória`);
    return cacheFatorial53[n];
  }

  let resultado = n * memoFatorialExercicio53(n - 1);

  cacheFatorial53[n] = resultado;
  console.log(cacheFatorial53);
  return resultado;
}



formularioExercicio53.addEventListener("submit", (e) => {
  e.preventDefault();

  let numero = parseInt(numeroExercicio53Input.value);
  if (numero < 0) {
    resultadoExercicio53.innerHTML = `<p>O fatorial não está definido para números negativos</p>`;
  } else {
    let resultado = memoFatorialExercicio53(numero);
    resultadoExercicio53.innerHTML = `<p>O resultado de ${numero}! é = ${resultado}</p>`;
  }



  formularioExercicio53.reset()
})