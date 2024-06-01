/* 
- Crie uma função chamada `ordenarPersonalizado` que receba um array de objetos e uma função de comparação (callback) como argumentos e retorne o array ordenado.
*/

console.log("Exercício 60 OK");


const textoExercicio60Input = document.getElementById("exercicio60texto");
const btnExercicio60Reset = document.getElementById("exercicio60FormBtnReset");
const btnExercicio60Ordenar = document.getElementById("exercicio60FormBtnOrdenar");
const tituloDisplayExercicio60 = document.getElementById("tituloDisplayExercicio60");
const listaExercicio60 = document.getElementById("listaExercicio60");


const listaObjetosExercicio60 = [
  {
    texto: "Banana",
    id: 1
  },
  {
    texto: "Maçã",
    id: 2
  },
  {
    texto: "Pera",
    id: 3
  },
  {
    texto: "Uva",
    id: 4
  },
  {
    texto: "Laranja",
    id: 5
  }
];

listaExercicio60.textContent = `[ ${listaObjetosExercicio60.map((i) => (i.texto)).join(", ")} ]`;


function ordenarPersonalizado(l, callback) {
  return callback(l);
}



function ordernarIdExercicio60(l) {
  let novaLista = [];
  
  for (let i = 1; i <= l.length; i++) {
    novaLista.push(l[l.length - i]);
  }
  return novaLista;
}

function ordernarAZExercicio60 (l) {
  let novaLista = [...l]
  return novaLista.sort((a, b) => {
    if (a.texto < b.texto) {
      return -1;
    } else if (a.texto > b.texto) {
      return 1;
    } else {
      return 0;
    }
  })
}

function ordernarZAExercicio60 (l) {
  let novaLista = [...l]
  return novaLista.sort((a, b) => {
    if (a.texto > b.texto) {
      return -1;
    } else if (a.texto < b.texto) {
      return 1;
    } else {
      return 0;
    }
  })
}

let listaCopiladaExercicio60;
let clickExercicio60 = 0;

btnExercicio60Ordenar.addEventListener("click", (e) => {
  e.preventDefault();

  if (clickExercicio60 === 0) {
    listaCopiladaExercicio60 = ordenarPersonalizado(listaObjetosExercicio60, ordernarIdExercicio60);
    listaExercicio60.textContent = `[ ${listaCopiladaExercicio60.map((i) => (i.texto)).join(", ")} ]`;
    tituloDisplayExercicio60.textContent = `Lista Invertida`;
    clickExercicio60 = 1;
  } else if (clickExercicio60 === 1) {
    listaCopiladaExercicio60 = ordenarPersonalizado(listaObjetosExercicio60, ordernarAZExercicio60);
    listaExercicio60.textContent = `[ ${listaCopiladaExercicio60.map((i) => (i.texto)).join(", ")} ]`;
    tituloDisplayExercicio60.textContent = `Lista A - Z`;
    clickExercicio60 = 2;
  } else if (clickExercicio60 === 2) {
    listaCopiladaExercicio60 = ordenarPersonalizado(listaObjetosExercicio60, ordernarZAExercicio60);
    listaExercicio60.textContent = `[ ${listaCopiladaExercicio60.map((i) => (i.texto)).join(", ")} ]`;
    tituloDisplayExercicio60.textContent = `Lista Z - A`;
    clickExercicio60 = 3;
  } else {
    listaCopiladaExercicio60 = listaObjetosExercicio60;
    listaExercicio60.textContent = `[ ${listaCopiladaExercicio60.map((i) => (i.texto)).join(", ")} ]`;
    tituloDisplayExercicio60.textContent = `Lista Original`;
    clickExercicio60 = 0;
  }

})


btnExercicio60Reset.addEventListener("click", (e) => {
  e.preventDefault();
  tituloDisplayExercicio60.textContent = `Lista Original`;
  clickExercicio60 = 0;

})
