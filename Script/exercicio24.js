/* 
Escreva um programa que pede ao usuário para inserir um número inteiro e conta quantos dígitos há nesse número.
*/

console.log("Exercício 24 OK");

const numeroExercicio24Input = document.getElementById("exercicio24numero");
const btnExercicio24 = document.getElementById("exercicio24FormBtn");
const resultadoExercicio24 = document.getElementById("exercicio24resultado");



numeroExercicio24Input.addEventListener("input", (e) => {
    e.preventDefault();

    let digitos = e.target.value.length;

    resultadoExercicio24.textContent = `O número inserido tem ${digitos} digitos`;

} );

btnExercicio24.addEventListener("click", (e) => {
    e.preventDefault();

    numeroExercicio24Input.value = "";
    resultadoExercicio24.textContent = "";
})
