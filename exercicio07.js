/*
- Crie um programa que verifica se um número é positivo, negativo ou zero.
*/

console.log("Exercício 07 OK");

const formularioExercicio07 = document.getElementById("exercicio07Form");
const numeroExercicio07Input = document.getElementById("exercicio07Numero");
const btnExercicio07 = document.getElementById("exercicio07FormBtn");
const resultadoExercicio07 = document.getElementById("exercicio07resultado");

btnExercicio07.addEventListener("click", (e) => {
    e.preventDefault();

    let numeroExercicio07;

    try {
        numeroExercicio07 = parseFloat(numeroExercicio07Input.value);

        if (isNaN(numeroExercicio07)) {
            throw new Error("Erro de digitação: digite um numero válido");
        } 
    }catch {
        resultadoExercicio07.textContent = erro.message;
        return;
    }

    let resultado07OK = numeroExercicio07 < 0 ? `O numero ${numeroExercicio07} é Negativo` : numeroExercicio07 > 0 ? `O numero ${numeroExercicio07} é Positivo` : 
    `O numero ${numeroExercicio07} é Zero`;

    resultadoExercicio07.textContent = resultado07OK.toString();
})
