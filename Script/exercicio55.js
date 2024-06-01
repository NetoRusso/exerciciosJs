/* 
- Crie uma função chamada `currySoma` que usa currying para somar três números. A função deve ser chamada assim: `currySoma(a)(b)(c)`.
*/

console.log("Exercício 55 OK");

const formularioExercicio55 = document.getElementById("exercicio55Form");
const numero1Exercicio55Input = document.getElementById("exercicio55numero1");
const numero2Exercicio55Input = document.getElementById("exercicio55numero2");
const numero3Exercicio55Input = document.getElementById("exercicio55numero3");
const resultadoExercicio55 = document.getElementById("exercicio55resultado");

const currySomaExercicio55 = (a) => (b) => (c) => {
  return a + b + c;
}

formularioExercicio55.addEventListener("submit", (e) => {
  e.preventDefault();

  let valor1 = parseFloat(numero1Exercicio55Input.value);
  let valor2 = parseFloat(numero2Exercicio55Input.value);
  let valor3 = parseFloat(numero3Exercicio55Input.value);

  if (valor1 === "" || isNaN(valor1)) {
    valor1 = 0;
  }
  if (valor2 === "" || isNaN(valor2)) {
    valor2 = 0;
  }
  if (valor3 === "" || isNaN(valor3)) {
    valor3 = 0;
  }

  let resultado = currySomaExercicio55(valor1)(valor2)(valor3);

  resultadoExercicio55.innerHTML = `
  <p>O resultado de 
    ${valor1 !== 0 ? valor1 : ""}  
    ${valor2 !== 0 ? "+ " + valor2 : ""}  
    ${valor3 !== 0 ? "+ " + valor3 : ""}  
    é =  ${resultado}.</p>
    `;

  formularioExercicio55.reset();
})

