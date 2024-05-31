/*
Crie um trecho de código que calcula o IMC de uma pessoa. Crie uma variável para armazenar o peso em kg e uma para armazenar a altura em metros. O cálculo do IMC é: PESO / ALTURA ^ 2;
*/

console.log("Exercicio 02 OK");

const pesoInput = document.getElementById("exercicio02Peso");
const alturaInput = document.getElementById("exercicio02Altura");
const btnImc = document.getElementById("exercicio02FormBtn");
const formularioExercicio02 = document.getElementById("exercicio02Form");
const resultadoExercicio02 = document.getElementById("exercicio02resultado");

btnImc.addEventListener("click", (e) => {
    e.preventDefault();

    let peso, altura;
    try {
        peso = parseFloat(pesoInput.value);
        altura = parseFloat(alturaInput.value);

        if (isNaN(peso) || isNaN(altura)) {
            throw new Error("Erro de digitação: Digite números válidos para peso e altura.");
        }
    } catch {
        resultadoExercicio02.textContent = erro.message;
        return;
    }

    const imc = (peso/(altura*altura));

    resultadoExercicio02.textContent = 
        imc < 18.5 ? imc.toFixed(2) + " Abaixo do Peso**." :
        imc >= 18.5 && imc < 25 ? imc.toFixed(2) + " Peso Normal**." :
        imc >=  25 && imc < 30 ? imc.toFixed(2)  + " Acima do Peso**." :
        imc >= 30 && imc < 35 ? imc.toFixed(2) + " Obesidade Grau I**." :
        imc >= 35 && imc < 40 ? imc.toFixed (2) + " Obesidade Grau II**." :
        imc.toFixed(2) + " Obesidade Grau III**.";

    formularioExercicio02.reset();
})