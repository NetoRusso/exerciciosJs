/*  
- Crie uma função anônima e atribua-a a uma variável chamada `multiplicar`. A função deve receber dois números como argumentos e retornar a multiplicação deles.
*/

console.log("Exercício 37 OK");

const formularioExercicio37 = document.getElementById("exercicio37Form");
const numero1Exercicio37Input = document.getElementById("exercicio37numero1");
const numero2Exercicio37Input = document.getElementById("exercicio37numero2");
const resultadoExercicio37Input = document.getElementById("exercicio37resultado");

const multiplicarExercicio37 = function(a, b) {
    return a * b
}

formularioExercicio37.addEventListener("submit", (e) => {
    e.preventDefault()

    let numero1 = parseFloat(numero1Exercicio37Input.value);
    let numero2 = parseFloat(numero2Exercicio37Input.value);

    let resultado = multiplicarExercicio37(numero1, numero2);
    console.log("Entrou " + numero1 + " x " + numero2 + " = " + resultado);
    resultadoExercicio37Input.innerHTML = `<p>${numero1} x ${numero2} = ${resultado}</p>`;
})