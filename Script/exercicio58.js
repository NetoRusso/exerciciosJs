/* 
- Crie uma função chamada `compor` que receba duas funções como argumentos e retorne uma nova função que é a composição das duas.
*/

console.log("Exercício 58 OK");

const formularioExercicio58 = document.getElementById("exercicio58Form");

const numero1Exercicio58Input = document.getElementById("exercicio58Numero1");
const numero2Exercicio58Input = document.getElementById("exercicio58Numero2");
const numero3Exercicio58Input = document.getElementById("exercicio58Numero3");
const numero4Exercicio58Input = document.getElementById("exercicio58Numero4");

const operacao01Exercicio58 = document.getElementById("operacao1Exercicio58");
const operacao02Exercicio58 = document.getElementById("operacao2Exercicio58");
const operacaoCentralExercicio58 = document.getElementById("operacaoCentralExercicio58");

const btnExercicio58 = document.getElementById("exercicio58FormBtn");
const resultadoExercicio58 = document.getElementById("exercicio58resultado");


function comporExercicio58 (n1, n2, o1, oc, n3, n4, o2) {
  return oc(o1(n1, n2), o2(n3, n4))
}



function somaExercicio58(a, b) {
  return a + b;
}

function subtracaoExercicio58(a, b) {
  return a - b;
}

function multiplicacaoExercicio58(a, b) {
  return a * b;
}

function divisaoExercicio58(a, b) {
  if( b === 0 ) {
    return " Não é possivel dividir por 0 ";
  }
  return a / b;
}

btnExercicio58.addEventListener("click", function (e) {
  e.preventDefault();

  let numero01 = parseFloat(numero1Exercicio58Input.value);
  let numero02 = parseFloat(numero2Exercicio58Input.value);
  let numero03 = parseFloat(numero3Exercicio58Input.value);
  let numero04 = parseFloat(numero4Exercicio58Input.value);


  if (numero01 === "" || isNaN(numero01)) {
    numero01 = 0;
  }
  if (numero02 === "" || isNaN(numero02)) {
    numero02 = 0;
  }
  if (numero03 === "" || isNaN(numero03)) {
    numero03 = 0;
  }
  if (numero04 === "" || isNaN(numero04)) {
    numero04 = 0;
  }



  let operacaoAcao01 = operacao01Exercicio58.value;
  let operacaoAcao02 = operacao02Exercicio58.value;
  let operacaoAcaoCentral = operacaoCentralExercicio58.value;

  let operacao01;
  let operacao02;
  let operacaoCentral;
  let sinal01;
  let sinal02;
  let sinalCentral;

switch (operacaoAcao01) {
  case "soma":
    operacao01 = somaExercicio58;
    sinal01 = "+";
    break;

  case "subtracao":
    operacao01 = subtracaoExercicio58;
    sinal01 = "-";
    break;

  case "multiplicacao":
    operacao01 = multiplicacaoExercicio58;
    sinal01 = "x";
    break;

  case "divisao":
    operacao01 = divisaoExercicio58;
    sinal01 = "÷";
    break;
}

switch (operacaoAcao02) {
  case "soma":
    operacao02 = somaExercicio58;
    sinal02 = "+";
    break;

  case "subtracao":
    operacao02 = subtracaoExercicio58;
    sinal02 = "-";
    break;

  case "multiplicacao":
    operacao02 = multiplicacaoExercicio58;
    sinal02 = "x";
    break;

  case "divisao":
    operacao02 = divisaoExercicio58;
    sinal02 = "÷";
    break;
}

switch (operacaoAcaoCentral) {
  case "soma":
    operacaoCentral = somaExercicio58;
    sinalCentral = "+";
    break;

  case "subtracao":
    operacaoCentral = subtracaoExercicio58;
    sinalCentral = "-";
    break;

  case "multiplicacao":
    operacaoCentral = multiplicacaoExercicio58;
    sinalCentral = "x";
    break;

  case "divisao":
    operacaoCentral = divisaoExercicio58;
    sinalCentral = "÷";
    break;
}


resultadoExercicio58.innerHTML = `<p>A operação é ( ${numero01} ${sinal01} ${numero02} ) ${sinalCentral} ( ${numero03} ${sinal02} ${numero04} ) o resultado é = ${comporExercicio58(numero01, numero02, operacao01, operacaoCentral, numero03, numero04, operacao02)}.</p>`;

formularioExercicio58.reset();

})