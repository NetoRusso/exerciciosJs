/* 
- Desenvolva um programa que simula um sistema de empréstimo, determinando se um cliente é elegível com base na renda, idade e histórico de crédito.
*/

/* 
**Regras de negócio:**

    CPF Valido. => Trava no envio; OK
    Idade > 21 anos && Idade < 70 anos; OK
    (rendaBruta * 30%) > valorSolicitado/6;

*/

console.log("Exercício 16 OK");

const formularioExercicio16 = document.getElementById("exercicio16Form");
const nomeExercicio16Input = document.getElementById("nomeExercicio16");
const cpfExercicio16Input = document.getElementById("cpfExercio16");
const nascimentoExercicio16Input = document.getElementById("nascimentoExercicio16");
const rendaBrutaExercicio16Input = document.getElementById("recebivelBrutoExercicio16");
const valorSolicitadoExercicio16Input = document.getElementById("valorSolicitadoExercicio16");
const resultadoExercicio16 = document.getElementById("exercicio16resultado");




function validaCPF(cpf) {
  cpf = cpf.replace(/[^0-9]/g, '');

  if (cpf.length !== 11) {
    return false;
  }

  if (/(\d)\1{10}/.test(cpf)) {
    return false;
  }

  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let resto = 11 - (soma % 11);
  if (resto === 10 || resto === 11) {
    resto = 0;
  }
  if (resto !== parseInt(cpf.charAt(9))) {
    return false;
  }

  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i);
  }
  resto = 11 - (soma % 11);
  if (resto === 10 || resto === 11) {
    resto = 0;
  }
  if (resto !== parseInt(cpf.charAt(10))) {
    return false;
  }

  return true;
}

function descobrirIdade(dataDeNascimento) {
  const hoje = new Date();
  const nascimento = new Date(dataDeNascimento);
  let idade = hoje.getFullYear() - nascimento.getFullYear();
  const mesAtual = hoje.getMonth();
  const mesNascimento = nascimento.getMonth();
  if (mesAtual < mesNascimento || (mesAtual === mesNascimento && hoje.getDate() < nascimento.getDate())) {
    idade--;
  }
  return idade;
}


formularioExercicio16.addEventListener("submit", (e) => {
  e.preventDefault();
  resultadoExercicio16.textContent = "";
  let nome = nomeExercicio16Input.value;
  let cpf = cpfExercicio16Input.value;
  let nascimento = nascimentoExercicio16Input.value;
  let renda = rendaBrutaExercicio16Input.value;
  let solicitado = valorSolicitadoExercicio16Input.value;
  let credito = (renda * 0.3) > (solicitado / 12) ? true : false;
  let idade = descobrirIdade(nascimento);

  if (!validaCPF(cpf)) {
    resultadoExercicio16.textContent = `${nome} porfavor insira um CPF válido`;
  } else if (idade < 21 || idade > 70) {
    resultadoExercicio16.textContent = `${nome} Crédito não aprovado por critério de idade`;
  } else if (!credito) {
    resultadoExercicio16.textContent = `${nome} Crédito não aprovado por critério de histórico de risco`;
  }else {
    resultadoExercicio16.textContent = `${nome} seu  empréstimo foi pré aprovado, na condição de 6x de R$ ${((solicitado /6) *( 1 + (0.1 * 6))).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} pode passar em uma de nossas agências e assinar a proposta formal!💸💵 ✨`

    formularioExercicio16.reset();
  }
})